import React, { Component } from "react";
import "./Home.css";
import firebase from "../Firestore";
import Table from "./Table";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      X: null,
      Y: null,
      data: []
    };
  }
  editToggle = () => {
    this.setState(
      prevState => ({
        showMenu: !prevState.showMenu
      }),
      () => {
        console.log("showMenu: ", this.state.showMenu);
      }
    );
  };

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
        <Table
          data={this.state.data}
          showMenu={this.state.showMenu}
          editToggle={this.editToggle}
        />
      </div>
    );
  }
}

export default Home;
