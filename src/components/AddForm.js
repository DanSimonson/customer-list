import React from "react";
import Autosuggest from "react-autosuggest";
import { Formik, Field, Form } from "formik";
import { TextField, Button, Radio, Checkbox } from "@material-ui/core";
import * as Yup from "yup";
import axios from "axios";
import Error from "./Errors";
import { render } from "react-dom";

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
  name: Yup.string()
    .min(1, "Too Short!")
    .max(255, "Too Long!")
    .required("Required"),
  country: Yup.string()
    .min(1, "Too Short!")
    .max(255, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Must be an email address")
    .max(255, "Too Long!")
    .required("Required")
});

export default function AddForm() {
  return (
    <div>
      <Formik
        initialValues={{
          status: "",
          active: "",
          cellPhone: "",
          firstName: "",
          lastName: "",
          name: "",
          email: "",
          country: "",
          postalCode: ""
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          //make async call
          console.log("submitted data: ", data);

          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <Field
              placeholder="First Name"
              name="firstName"
              type="input"
              as={TextField}
            />
            {/*<TextField
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />*/}
            <div>
              <button disable={isSubmitting} type="submit">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
