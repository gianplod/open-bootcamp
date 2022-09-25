import { useState } from 'react';
import ComponentB from './componentB';
import { Contact } from '../models/contact.class';


const ComponentA = () => {

    const [isConnectedState, setStatus] = useState(false);

    let sampleContact = new Contact("Gianluca", "Plodari", "gian.plodari@hotmail.com", isConnectedState)
    
    const changeStatus = () => {

        setStatus(!(isConnectedState));
    }

    return (
        <div>
            <ComponentB contact={sampleContact}></ComponentB>
            <button onClick={changeStatus}> Change status</button>
        </div>


    );
};


export default ComponentA;
