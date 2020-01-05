import React, { useState } from "react";
import "./Add.css";

const Add = () => {
  // useState can be used multiple times for different data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    //addSong(title);
    setFirstName("");
    setLastName("");
    setEmail("");
    setCellPhone("");
  };
  return (
    <form onSubmit={handleSubmit} className="wrapForm">
      <label>First Name:</label>
      <input
        type="text"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <label>Last Name:</label>
      <input
        type="text"
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <label>Cell Phone:</label>
      <input
        type="tel"
        value={cellPhone}
        onChange={e => setCellPhone(e.target.value)}
      />
      <label>Active </label>
      <input id="toggle-on" name="toggle" type="radio" />
      <label for="toggle-on">Yes </label>
      <input id="toggle-off" name="toggle" type="radio" />
      <label for="toggle-off">No</label>
      <input type="submit" value="add" />
    </form>
  );
};

export default Add;
