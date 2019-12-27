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
          docData.pop();
        });
        this.setState({ data: documentArray });
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }
  render() {
    if (!this.state.data) {
    }
    return (
      <div className="App">
        {/*<h1>customer list: {this.state.message}</h1> */}
        <Table data={this.state.data} />
      </div>
    );
  }
}

export default App;
