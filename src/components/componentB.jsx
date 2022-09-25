import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';


const ComponentB = ({contact}) => {

    return (
        <div>
            <h1>Contact details</h1>
            <ul>
                <li>Name: {contact.name}</li>
                <li>Last Name: {contact.lastName}</li>
                <li>Email address: {contact.emailAddress}</li>
                <li>Status: {contact.isConnected ? "Online" : "Offline"}</li>
            </ul>


        </div>
    );
};


ComponentB.propTypes = {

    contact: PropTypes.instanceOf(Contact),


};


export default ComponentB;
