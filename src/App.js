import React, { Component } from "react";
import "./App.css";
import firebase from "./Firestore";
import Table from "./components/Table";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    const docData = [];
    let documentArray = [];
    const db = firebase.firestore();
    db.collection("customer")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          docData.push(doc.data());
          documentArray.push(...docData);
          console.log("documentArray: ", documentArray);
          docData.pop();
        });
        this.setState({ data: documentArray }, () => console.log(this.state));
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }
  render() {
    return (
      <div className="App">
        {/*<h1>customer list: {this.state.message}</h1> */}
        <Table />
      </div>
    );
  }
}

export default App;
