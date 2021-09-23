import React from "react"
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";


function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          {/* Default root always at the bottom */}
          <Route path="/">
            <Header/>
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
