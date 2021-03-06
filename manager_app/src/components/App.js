import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { uuid, v4 } from "uuidv4";
import ContactDetail from "./ContactDetail";
import api from "../api/contacts"
import EditContact from "./EditContact";
import { SearchResults } from "semantic-ui-react";


const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // RetrieveCOntacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  const addContactHandler = async (contact) => {
      console.log(contact)

      // Save new contact to json db
      const request = {
        id: v4(),
        ...contact
      }

      // save contact/response to state
      const response = await api.post("/contacts", request)

      setContacts([...contacts, response.data])
  }

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact)
    
    const {id, name, email} = response.data
    setContacts(contacts.map((contact) => {
      return contact.id === id ? {...response.data} : contact;
      })
    );
  };

    // Overwrites existing contactList, without the deleted contact
    // creates new contact list,
    // filters out contact by id (the contact to delete)
    // sets new state with new contactList minus the deleted contact
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContactList);
  }

    const searchHandler = (searchTerm) => {
      setSearchTerm(searchTerm);
      if(searchTerm !== "") {
        const newContactList = contacts.filter((contact) => {
          return Object.values(contact)
            .join(" ")
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        });
        setSearchResults(newContactList);
      } else {
        setSearchResults(contacts)
      }
    };

  // Grabs any contacts saved in local storage AND sets them in state
  useEffect(() => {
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(retrieveContacts) setContacts(retrieveContacts)

    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if(allContacts) setContacts(allContacts);
    };
    getAllContacts();
  }, []);

  // Takes contact submission and saves it in local storage
  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container" >
      <Router> 
        <Header />
        <Switch> 
          <Route path="/" 
          exact 
          render={(props) => (
            <ContactList 
              {...props} 
              contacts={ searchTerm.length < 1 ? contacts : searchResults} 
              getContactId={removeContactHandler}
              term={searchTerm}
              searchKeyword={searchHandler}  />
          )}/>
            
            
          <Route path="/add" 
          render={(props) => (
            <AddContact {...props} addContactHandler={addContactHandler}/>
            )}
          /> 

          <Route path="/edit" 
          render={(props) => (
            <EditContact {...props} updateContactHandler={updateContactHandler}/>
            )}
          /> 

          <Route path="/contact/:id" component={ContactDetail} />

        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
