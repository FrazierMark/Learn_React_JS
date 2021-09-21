import React, { useRef } from "react"
import ContactCard from "./ContactCard"
import { Link } from "react-router-dom";
import {Button} from "semantic-ui-react"


const ContactList = (props) => {

    const inputEl = useRef("")

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard 
            
            contact={contact} 
            clickHandler={deleteContactHandler} 
            key={contact.id} />
        )
    })

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value)
    };

    return (
        <div className="main">
            <h2> Contact List
                <div classNmae="ui search">
                    <div className="ui icon input">
                        <input ref={inputEl} type="text" placeholder="Search Contacts" className="prompt" value={props.term} onChange={getSearchTerm} />
                        <i className="search icon"></i> 
                    </div>
                </div>
                <Link to="/add">
                    <Button className="ui button blue" floated='right'>Add Contact</Button>
                </Link>
            </h2>
            
            <div className="ui celled list">
                {renderContactList.length > 0 ? renderContactList: "No Contacts"}
            </div>
        </div>
    );
};

export default ContactList