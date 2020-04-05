import React, { Component } from "react";
import PropTypes, { nominalTypeHack } from "prop-types";
import firebase from "../Firestore";
import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "./Table.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      creating: false,
    };
  }
  startCreateEventHandler = (event, ID) => {
    this.setState({
      creating: true,
      id: ID,
    });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
    this.handleDelete();
  };

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };

  handleDelete = () => {
    const db = firebase.firestore();

    //update page
    for (let i = 0; i < this.props.data.length; i++) {
      if (this.props.data[i].userID === this.state.id) {
        this.props.data.splice(i, 1);
      }
    }

    //delete from database
    db.collection("customer")
      .doc(this.state.id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };

  handleEdit = (event, ID) => {
    //push to edit page with correct route id stored in location
    this.props.history.push("/edit", { id: ID });
  };

  render() {
    return (
      <main>
        <div className="myContainer">
          <table>
            <thead>
              <tr>
                {/*<th>User-Id</th>*/}
                <th>First-Name</th>
                <th>Last-Name</th>
                <th>Email</th>
                <th>Cell-Phone</th>
                <th>Status</th>
                <th>
                  <NavLink to="/add">
                    <button className="myBtn">
                      Add
                      <FontAwesomeIcon icon="user-plus" className="editIco" />
                    </button>
                  </NavLink>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((row, index) => (
                <tr key={row.userID}>
                  {/*<td>{row.userID}</td>*/}
                  <td>{row.firstName}</td>
                  <td>{row.lastName}</td>
                  <td>{row.email}</td>
                  <td>{row.cellPhone}</td>
                  <td>
                    {row.status === "active" ? (
                      <FontAwesomeIcon icon="thumbs-up" />
                    ) : (
                      <FontAwesomeIcon icon="thumbs-down" />
                    )}
                  </td>
                  <td>
                    <button
                      className="myBtn"
                      onClick={(event) => {
                        event.persist();
                        this.handleEdit(event, row.userID);
                      }}
                    >
                      Edit
                      <FontAwesomeIcon className="editIco" icon="edit" />
                    </button>{" "}
                    <button
                      className="myBtn"
                      onClick={(event) => {
                        this.startCreateEventHandler(event, row.userID);
                      }}
                    >
                      Delete
                      <FontAwesomeIcon className="editIco" icon="trash" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {this.state.creating && <Backdrop />}
        {this.state.creating && (
          <Modal
            title="Add Event"
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.modalConfirmHandler}
          >
            <p>Modal Content</p>
          </Modal>
        )}
      </main>
    );
  }
}
Table.propTypes = {
  type: PropTypes.array,
};

export default withRouter(Table);
