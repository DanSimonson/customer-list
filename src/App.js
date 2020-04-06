import React, { Component } from "react";
import "./App.css";
import firebase from "./Firestore";
import { Route, BrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Home from "./components/Home";
import Edit from "./components/Edit";
import Add from "./components/Add";
import Footer from "./components/Footer/Footer";
import Toolbar from "./components/Toolbar/Toolbar";
class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop />;
    }
    //click={this.backdropClickHandler}
    //show={this.state.sideDrawerOpen}
    return (
      <BrowserRouter>
        <div className="App">
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          {sideDrawer}
          {backdrop}
          <Footer>
            <div className="footer">
              Made With Love &nbsp;
              <FontAwesomeIcon icon="heart" />
            </div>
          </Footer>

          <Route exact path="/" component={Home} />
          <Route path="/edit" component={Edit} />
          <Route path="/add" component={Add} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
