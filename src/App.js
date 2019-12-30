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
        this.setState({
          loading: false,
          data: documentArray
        });
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  }
  render() {
    return (
      <div className="App">
        <Table data={this.state.data} />
      </div>
    );
  }
}

export default App;
