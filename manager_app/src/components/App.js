import React from "react"
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const App = () => {
  const contacts = [
    {
      id: "1",
      name: "Phil",
      email: "philsander@gmail.com",
    },
    {
      id: "2",
      name: "Jeremy",
      email: "Jbear@gmail.com"
    }
  ];
  return (
    <div className="ui container" >
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
