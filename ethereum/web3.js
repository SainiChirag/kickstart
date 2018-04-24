import Web3 from 'web3';
//const web3 = new Web3(window.web3.currentProvider);
let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    // present in browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
}
else { 
    // we are on the server OR the user is not running metamask
    //set up own provider
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/NIPz5KYjZxy3U9FpOGMj'
    );

    web3 = new Web3(provider);

}
export default web3;