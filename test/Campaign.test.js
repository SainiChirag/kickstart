const assert = require ('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async() => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode})
    .send({from : accounts[0], gas: '1000000'});


    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    //es 2015 below -- first address
    [campaignAddress] =  await factory.methods.getDepolyedCampaigns().call();

    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );
});

describe ('Campaigns', () => {
    it('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it ('deploys contact as a manager', async() => {
        assert.equal(await campaign.methods.manager().call(), accounts[0]);
    });

    it ('lets people donate money and marks them as approver', async() => {
        await campaign.methods.contribute().send({
            from: accounts[1],
            value: '200'
        });

        assert.equal(await campaign.methods.approversCount().call(), 1);
        assert.ok(await campaign.methods.approvers(accounts[1]).call());

    });

    it ('verify campaign has minimum contribution', async() => {
        try{
            await campaign.methods.contribute().send({
                from:accounts[1],
                value: '5'
            });
            assert(False);
        }
        catch(err){
            assert(err);
        }
    });

    it('allows a manager to create a request', async()=> {
        let manager = await campaign.methods.manager().call();

        await campaign.methods
            .createRequest('Buy batteries', '100', accounts[1]).send({
            from: manager, 
            gas:'1000000'
        });

         const request = await campaign.methods.requests(0).call();

         assert.equal(request.description, 'Buy batteries');

    });

    it ('processes requests', async () => {
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10', 'ether')
        });

        await campaign.methods
        .createRequest('Buy batteries', web3.utils.toWei('5', 'ether'), accounts[1])
        .send({
            from:accounts[0],
            gas: '1000000'
        });

        await campaign.methods.approveRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });

        await campaign.methods.finalizeRequest(0).send({
            from: accounts[0],
            gas: '1000000'
        });

        let balance = await web3.eth.getBalance(accounts[1]);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);
        console.log(balance);
        assert(balance > 104);

    });

});