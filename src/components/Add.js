import React, { useState, useEffect } from "react";
import firebase from "../Firestore";
import "./Add.css";
import {
  Formik,
  Field,
  Form,
  useField,
  FieldAttributes,
  FieldArray
} from "formik";
const nanoid = require("nanoid");

const Add = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [toggleOn, setToggleOn] = useState("");
  const [toggleOff, setToggleOff] = useState("");
  const [data, setData] = useState({ hits: [] });

  /*const handleSubmit = evt => {
    evt.preventDefault();
    postData();
  };*/
  const postData = () => {
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
  };

  return (
    <div>
      <Formik initialValues={{ firstName: "", email: "" }}>
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <form>
            {JSON.stringify(values)}
            <div className="wrapOne">
              <label htmlFor="firstName">
                firstName:
                <input
                  placeholder="first name"
                  name="firstName"
                  type="text"
                  id="firstName"
                  placeholder="Enter first name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
              </label>
              <label htmlFor="email">
                Email:
                <input
                  placeholder="email"
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Enter email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </label>
            </div>
          </form>
        )}
      </Formik>
    </div>

    /* <form onSubmit={handleSubmit}>
      <div className="wrapOne">
        <label className="padLabel">
          First Name:
          <input
            className="inputMargin"
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
          />
        </label>
        <label className="padLabel">
          Last Name:
          <input
            className="inputMargin"
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
          />
        </label>
        <label className="padLabel">
          Email:
          <input
            className="inputMargin"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="padLabel">
          Cell Phone:
          <input
            className="inputMargin"
            type="tel"
            value={cellPhone}
            onChange={e => setCellPhone(e.target.value)}
            required
          />
        </label>
      </div>
      <div className="wrapTwo">
        <label>
          Active:
          <input
            id="toggle-on"
            name="toggle"
            type="radio"
            value="toggleOn"
            onChange={e => setToggleOn(e.target.value)}
          />
          <label for="toggle-on">Yes</label>
          <input
            id="toggle-off"
            name="toggle"
            type="radio"
            value="toggleOff"
            onChange={e => setToggleOff(e.target.value)}
          />
          <label for="toggle-off">No</label>
        </label>
      </div>
      <input type="submit" value="Submit" />
  </form>*/
  );
};

export default Add;
