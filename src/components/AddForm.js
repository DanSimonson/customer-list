import React, { Component } from "react";
import Autosuggest from "react-autosuggest";
import { Formik, Field, Form } from "formik";
import { TextField, Button, Radio, Checkbox } from "@material-ui/core";
import * as Yup from "yup";
import axios from "axios";
import Error from "./Errors";
import firebase from "../Firestore";
const nanoid = require("nanoid");
const ValidationSchema = Yup.object().shape({
  cellPhone: Yup.string()
    .min(1, "Too Short!")
    .max(255, "Too Long!")
    .required("Required"),
  firstName: Yup.string()
    .min(1, "Too Short!")
    .max(255, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(1, "Too Short!")
    .max(255, "Too Long!")
    .required("Required"),
  /*name: Yup.string()
    .min(1, "Too Short!")
    .max(255, "Too Long!")
    .required("Required"),
  country: Yup.string()
    .min(1, "Too Short!")
    .max(255, "Too Long!")
    .required("Required"),*/
  email: Yup.string()
    .email("Must be an email address")
    .max(255, "Too Long!")
    .required("Required")
});

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  postData = data => {
    const id = nanoid();
    const db = firebase.firestore();
    let tempArray = [];
    tempArray.push(data);

    db.collection("customer")
      .add({
        cellPhone: tempArray[0].cellPhone,
        email: tempArray[0].email,
        firstName: tempArray[0].firstName,
        lastName: tempArray[0].lastName,
        status: tempArray[0].status,
        userID: id
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };
  render() {
    return (
      <div>
        <Formik
          initialValues={{
            status: "",
            cellPhone: "",
            firstName: "",
            lastName: "",
            email: ""
          }}
          validationSchema={ValidationSchema}
          validate={values => {
            let errors = {};
            return errors;
          }}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            this.postData(data);
            setSubmitting(false);
          }}
        >
          {({ values, isSubmitting, errors, touched }) => (
            <Form>
              <pre>{JSON.stringify(values, null, 2)}</pre>
              <div className="input-row">
                <label>First Name</label>
                <Field
                  placeholder="First Name"
                  name="firstName"
                  type="input"
                  as={TextField}
                  className={
                    touched.firstName && errors.firstName ? "has-error" : null
                  }
                />
                <Error touched={touched.firstName} message={errors.firstName} />
              </div>
              <div className="input-row">
                <label>Last Name</label>
                <Field
                  placeholder="Last Name"
                  name="lastName"
                  type="input"
                  as={TextField}
                  className={
                    touched.lastName && errors.lastName ? "has-error" : null
                  }
                />
                <Error touched={touched.lastName} message={errors.lastName} />
              </div>
              <div className="input-row">
                <label>Email</label>
                <Field
                  placeholder="Email"
                  name="email"
                  type="text"
                  as={TextField}
                  className={touched.email && errors.email ? "has-error" : null}
                />
                <Error touched={touched.email} message={errors.email} />
              </div>
              <div className="input-row">
                <label>Cell Phone</label>
                <Field
                  name="cellPhone"
                  type="input"
                  as={TextField}
                  className={
                    touched.cellPhone && errors.cellPhone ? "has-error" : null
                  }
                />
                <Error touched={touched.cellPhone} message={errors.cellPhone} />
              </div>
              <div className="input-row">
                <label>Status</label>
              </div>
              <div className="input-row">
                <label>Active</label>
                <Field name="status" type="radio" value="active" as={Radio} />
                <label>Inactive</label>
                <Field name="status" type="radio" value="inactive" as={Radio} />
              </div>

              <div>
                <button type="submit">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
export default AddForm;