import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { uuid } from "uuidv4";

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
      console.log(contact)
      setContacts([...contacts, {id: uuid(), ...contact }])
  }

    // Overwrites existing contactList, without the deleted contact
    // creates new contact list,
    // filters out contact by id (the contact to delete)
    // sets new state with new contactList minus the deleted contact
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList);
  }


  // Grabs any contacts saved in local storage AND sets them in state
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) setContacts(retrieveContacts)
  }, []);

  // Takes contact submission and saves it in local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container" >
      <Router> 
        <Header />
        <Switch> 
          <Route path="/" exact component={ContactList}/>
          <Route path="/add" component={AddContact}/>
          
        </Switch>
        
        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler}  /> */}
      </Router>
    </div>
  );
}

export default App;
