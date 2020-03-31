import React, { useState, useEffect } from "react";
import firebase from "../Firestore";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Edit.css";

const nanoid = require("nanoid");

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px"
  }
});

export default function Edit(props) {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [toggleOn, setToggleOn] = useState("");
  const [toggleOff, setToggleOff] = useState("");
  const [data, setData] = useState({ hits: [] });
  //console.log("props: ", props);
  console.log("props.location.state.id: ", props.location.state.id);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection("customer")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          if (props.location.state.id === doc.data().userID) {
            console.log("userID found: ", props.location.state.id);
            setFirstName(doc.data().firstName);
            console.log("doc.data().firstName: ", doc.data().firstName);
          }
        });
      });
    return () => {
      //console.log("will unmount");
    };
  }, []);
  /*const handleSubmit = evt => {
    evt.preventDefault();
    postData();
  };*/
  /*const postData = () => {
    const id = nanoid();
    const db = firebase.firestore();
    //var washingtonRef = db.collection("cities").doc("DC");
    //var dbRef = db.collection("cities").doc("DC");
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

  /*const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(1, "Must have a character")
      .max(255, "Must be shorter thant 255")
      .required("Must enter a name"),
    email: Yup.string()
      .email("Must be valid email")
      .max(255, "Must be shorter thant 255")
      .required("Must enter an email")
  });*/

  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </form>
      {/*<FormikForm />*/}
      {/*<Formik
        initialValues={{ firstName: "", email: "" }}
        validationSchema={validationSchema}
      >
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
                  className={
                    touched.firstName && errors.firstName ? "has-error" : null
                  }
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
                  className={touched.email && errors.email ? "has-error" : null}
                />
              </label>
              <div className="formik-submit">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        )}
      </Formik>*/}
    </React.Fragment>

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
}

//export default Add;
