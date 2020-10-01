import React from "react";
import Body from "./Body";
import Foot from "./Foot";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Body />
            <Foot />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
