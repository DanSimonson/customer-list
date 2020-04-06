import React from "react";
//import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { withRouter, NavLink } from "react-router-dom";

import "./Toolbar.css";

/*function goToEdit(event, props) {
  //console.log("in edit with event:", event);
  //push to edit page with correct route id stored in location
  this.props.history.push("/edit");
}*/

const toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        {/*<div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />{" "}
        </div>*/}
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div>
        <div className="spacer" />
        <div className="toolbar__logo">
          <a href="/">MARIPOSAWEB.NET</a>
        </div>
      </nav>
    </header>
  );
};

export default withRouter(toolbar);
