import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import Edit from "./components/Edit";
//import Add from "./components/Edit";
//import Table from "./components/Table";
import * as serviceWorker from "./serviceWorker";
//import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faThumbsDown,
  faThumbsUp,
  faEdit,
  faUserPlus,
  faTrash,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

library.add(faTrash, faEdit, faUserPlus, faThumbsDown, faThumbsUp, faHeart);

ReactDOM.render(<App />, document.getElementById("root"));
//
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
