import React from "react"
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./components/firebase";
import { useStateValue } from "./components/StateProvider";


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // once app loads, code fires... 
    auth.onAuthStateChanged(authUser => {
      console.log('User>>', authUser);

      if (authUser) {
        //if user is logged IN, dispatch takes user info and holds it in state/context (sets user)

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
        
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        
        <Switch>

        <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          {/* Default root always at the bottom */}
          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
