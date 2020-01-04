import React, { Component } from "react";
import "./App.css";
import firebase from "./Firestore";
import { Route, BrowserRouter } from "react-router-dom";
//import Table from "./components/Table";
import Home from "./components/Home";
import Edit from "./components/Edit";
import Add from "./components/Add";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/edit" component={Edit} />
          <Route path="/add" component={Add} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
