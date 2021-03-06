import React from "react";
import Autosuggest from "react-autosuggest";
import { Formik, Field, Form } from "formik";
import { TextField, Button, Radio, Checkbox } from "@material-ui/core";
import * as Yup from "yup";
import axios from "axios";
import Error from "./Errors";

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

function isValidPostalCode(postalCode, country) {
  let postalCodeRegex;

  switch (country) {
    case "United States of America":
      postalCodeRegex = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
      break;
    case "Canada":
      postalCodeRegex = /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/;
      break;
    default:
      return true;
  }
  return postalCodeRegex.test(postalCode);
}

function postalCodeLabel(country) {
  const postalCodeLabels = {
    "United States of America": "Zip Code",
    Canada: "Postal Code"
  };
  return postalCodeLabels[country] || "Postal Code";
}

function showPostalCode(country) {
  return ["United States of America", "Canada"].includes(country);
}

export default function FormikForm() {
  const [country, setCountry] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);

  return (
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
      validationSchema={ValidationSchema}
      validate={values => {
        let errors = {};

        // Validate the Postal Code conditionally based on the chosen Country
        if (!isValidPostalCode(values.postalCode, values.country)) {
          errors.postalCode = `${postalCodeLabel(values.country)} invalid`;
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("value: ", values);
        /*setSubmitting(true);

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setCountry("");
          setSubmitting(false);
        }, 500);*/
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        checked
      }) => (
        <form onSubmit={handleSubmit}>
          {JSON.stringify(values)}

          <div className="input-row">
            <label>First Name</label>
            <Field
              name="firstName"
              type="input"
              as={TextField}
              className={
                touched.firstName && errors.firstName ? "has-error" : null
              }
            />
            {/*<input
              type="text"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={
                touched.firstName && errors.firstName ? "has-error" : null
              }
            />*/}
            <Error touched={touched.firstName} message={errors.firstName} />
          </div>
          <div className="input-row">
            <label>Last Name</label>
            <Field
              name="lastName"
              type="input"
              as={TextField}
              className={
                touched.lastName && errors.lastName ? "has-error" : null
              }
            />
            {/*<input
              type="text"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={
                touched.lastName && errors.lastName ? "has-error" : null
              }
            />*/}
            <Error touched={touched.lastName} message={errors.lastName} />
          </div>
          <div className="input-row">
            <label>Email</label>
            <Field
              name="email"
              type="text"
              as={TextField}
              className={touched.email && errors.email ? "has-error" : null}
            />
            {/*<input
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? "has-error" : null}
            />*/}
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
            {/*<input
              type="text"
              name="firstName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={
                touched.firstName && errors.firstName ? "has-error" : null
              }
            />*/}
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
        </form>
      )}
    </Formik>
  );
}
