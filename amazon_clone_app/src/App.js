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
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

//From stripe - API publishable key
const promise = loadStripe("pk_test_51JeQ98Lu7BrQj7NTn6019T0dDhs84NPyLyfvhJjJLXFJE1KrA5CwGJ5iHWTYexlKDiAYzsxpXhv8gzmgPI7qOAlO00sfwR18p4");

function App() {
  const [{ }, dispatch] = useStateValue();
  

useEffect(() => {
  // will only run once when the app component loads...

  auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);

    if (authUser) {
       //if user is logged IN, dispatch takes user info and holds it in data-layer (firebase) (sets user)

      dispatch({
        type: "SET_USER",
        user: authUser,
      });
    } else {
      // the user is logged out
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  });
}, []);

  return (
    <Router>
      <div className="app">
        
        <Switch>

        <Route path="/orders">
          <Header />
          <Orders />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

        <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
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
