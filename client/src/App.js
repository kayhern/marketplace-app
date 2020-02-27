import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AddItem from "./components/AddBtn";

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Router>
        <Footer />
      </div>
    )
  }

};
