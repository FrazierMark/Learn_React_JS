import React from "react"
import ContactCard from "./ContactCard"
import { Link } from "react-router-dom";
import {Button} from "semantic-ui-react"


const ContactList = (props) => {

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard 
            
            contact={contact} 
            clickHandler={deleteContactHandler} 
            key= {contact.id} />
        )
    })
    return (
        <div className="main">
            <h2> Contact List
                <div classNmae="ui search">
                    <div className="ui icon input">
                        <input type="text" placeholder="Search Contacts" className="prompt"/>
                        <i className="search icon"></i> 
                    </div>
                </div>
                <Link to="/add">
                    <Button className="ui button blue" floated='right'>Add Contact</Button>
                </Link>
            </h2>
            
            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
    );
};

export default ContactList