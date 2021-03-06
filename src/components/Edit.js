import React, { useState, useEffect } from "react";
import firebase from "../Firestore";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./Edit.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { FormHelperText } from "@material-ui/core";

const nanoid = require("nanoid");

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  myForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  myTextField: {
    marginBottom: "18px",
  },
  myRadioButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  wrapper: {
    margin: "0 auto",
    width: "80rem",
    height: "40rem",
    backgroundColor: "#beef00",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  makeStylesWrapper5: {
    margin: "0 auto",
    width: "80rem",
    height: "40rem",
    backgroundColor: "#beef00",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Edit(props) {
  const classes = useStyles();
  const [selected, setSelected] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [toggleOn, setToggleOn] = useState("");
  const [toggleOff, setToggleOff] = useState("");

  useEffect(() => {
    const db = firebase.firestore();
    db.collection("customer")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          if (props.location.state.id === doc.data().userID) {
            setFirstName(doc.data().firstName);
            setLastName(doc.data().lastName);
            setEmail(doc.data().email);
            setCellPhone(doc.data().cellPhone);
            if (doc.data().status === "active") {
              setSelected("active");
            } else {
              setSelected("inactive");
            }
          }
        });
      });
  }, []);

  const postData = () => {
    const db = firebase.firestore();
    let status;
    db.collection("customer")
      .doc(props.location.state.id)
      .set(
        {
          cellPhone: cellPhone,
          email: email,
          firstName: firstName,
          lastName: lastName,
          status: selected,
        },
        { merge: true }
      )
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  function handleChange(event) {
    setSelected(event.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    postData();
    props.history.push("/");
  };

  return (
    <div className={classes.wrapper}>
      <form
        className={classes.myForm}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          className={classes.myTextField}
          required
          id="outlined-required"
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          className={classes.myTextField}
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          className={classes.myTextField}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className={classes.myTextField}
          id="outlined-basic"
          label="Cell Phone"
          variant="outlined"
          value={cellPhone}
          onChange={(e) => setCellPhone(e.target.value)}
        />
        <RadioGroup
          onChange={handleChange}
          value={selected}
          className={classes.myRadioButtons}
        >
          <FormControlLabel
            value="active"
            control={<Radio />}
            label="Active"
            labelPlacement="start"
          />
          <FormControlLabel
            value="inactive"
            control={<Radio />}
            label="Inactive"
            labelPlacement="start"
          />
        </RadioGroup>
        <button className="myBtn" type="submit">
          Save
          <FontAwesomeIcon icon="user-plus" className="editIco" />
        </button>
      </form>
    </div>
  );
}

//export default Add;
