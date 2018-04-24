import React,{Component} from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';

class CampaignIndex extends Component {

    static async getInitialProps () {
        const campaigns = await factory.methods.getDepolyedCampaigns().call(); 
        return {campaigns};
    }
    /*async componentDidMount(){
        const campaigns = await factory.methods.getDepolyedCampaigns().call(); //typo in spelling of deployed
        console.log(campaigns);
    }*/ // cannot be used by nextjs (nextjs uses getInitialprops) 

    renderCampaigns(){
        const items = this.props.campaigns.map(address => {
            return{
                header:address,
                description:<a>View Capmpaign</a>,
                fluid: true
            }
        });
        return <Card.Group items = {items} />;
    }
    render(){
        
        return <div>
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
        {this.renderCampaigns()}
        <Button content="Create Campaign"
        icon="add circle"
        primary/>
        </div>
    }
}

export default CampaignIndex;