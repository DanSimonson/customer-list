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
        validationSchema={ValidationSchema}
        validate={values => {
          let errors = {};

          // Validate the Postal Code conditionally based on the chosen Country
          /*if (!isValidPostalCode(values.postalCode, values.country)) {
          errors.postalCode = `${postalCodeLabel(values.country)} invalid`;
        }*/

          return errors;
        }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          //make async call
          console.log("submitted data: ", data);

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
