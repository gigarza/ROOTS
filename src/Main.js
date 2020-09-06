import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./components/Home.js"
import Casting from "./components/Casting.js"

class Main extends Component {
  render() {
    return (
    <Router>
        <div>
            <Switch>
                <Route path="/casting">
                    <Casting />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    </Router>
    );
  }
}

export default Main;
