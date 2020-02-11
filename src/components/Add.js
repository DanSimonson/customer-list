//import React, { useState, useEffect } from "react";
import React, { Component } from "react";
import firebase from "../Firestore";
import "./Add.css";
import AddForm from "./AddForm";
/*import * as Yup from "yup";
import {
  Formik,
  Field,
  Form,
  useField,
  FieldAttributes,
  FieldArray
} from "formik";*/

const nanoid = require("nanoid");

class Add extends Component {
  /*const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [toggleOn, setToggleOn] = useState("");
  const [toggleOff, setToggleOff] = useState("");
  const [data, setData] = useState({ hits: [] });
  */
  constructor(props) {
    super(props);

    /*this.state = {
      theData: [{ firstName, lastName, email, cellPhone }],
      toggleOn: false,
      toggleOff: false
    };*/
  }

  /*postData = () => {
    const id = nanoid();
    const db = firebase.firestore();
    let status;
    if (toggleOn === "toggleOn") {
      status = true;
    } else if (toggleOff === "toggleOff") {
      status = false;
    }

    db.collection("customer")
      .add({
        cellPhone: cellPhone,
        email: email,
        firstName: firstName,
        lastName: lastName,
        status: status,
        userID: id
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };*/

  render() {
    return (
      <div>
        <AddForm />
      </div>
    );
  }
}
export default Add;
