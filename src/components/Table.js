import React, { Component } from "react";
import PropTypes, { nominalTypeHack } from "prop-types";
//import AlertDialog from "./AlertDialog";
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
      show: true,
      creating: false
    };
  }
  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
    this.handleDelete();
  };

  modalCancelHandler = () => {
    this.setState({ creating: false });
  };

  //event, ID
  handleDelete = () => {
    console.log("in delete function ");

    /*db.collection("customer")
      .doc(ID)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });*/
  };
  handleEdit = (event, ID) => {
    //push to edit page with correct route id stored in location
    this.props.history.push("/edit", { id: ID });
  };

  handleClick = () => {
    console.log("clickity");
  };

  render() {
    return (
      <main>
        <div>
          <table>
            <thead>
              <tr>
                <th>User-Id</th>
                <th>First-Name</th>
                <th>Last-Name</th>
                <th>Email</th>
                <th>Cell-Phone</th>
                <th>Status</th>
                <th>
                  <NavLink to="/add">
                    <button>
                      <FontAwesomeIcon icon="user-plus" className="editIco" />
                    </button>
                  </NavLink>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((row, index) => (
                <tr key={row.userID}>
                  <td>{row.userID}</td>
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
                    <button>
                      <FontAwesomeIcon
                        className="editIco"
                        icon="edit"
                        onClick={event => {
                          event.persist();
                          this.handleEdit(event, row.userID);
                        }}
                      />
                    </button>{" "}
                    <button>
                      <FontAwesomeIcon
                        className="editIco"
                        icon="trash"
                        onClick={this.startCreateEventHandler}
                        /*onClick={event => {
                          event.persist();
                          this.handleDelete(event, row.userID);
                        }}*/
                      />
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
  type: PropTypes.array
};

export default withRouter(Table);
