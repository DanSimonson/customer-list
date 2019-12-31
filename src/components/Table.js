import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Table.css";

class Table extends Component {
  //console.log("props: ", this.props.data);
  handleEdit = () => {
    this.props.editToggle();
    //console.log("showMenu: ", showMenu);
  };
  render() {
    return (
      <main>
        <table>
          <thead>
            <tr>
              <th>User-Id</th>
              <th>First-Name</th>
              <th>Last-Name</th>
              <th>Email</th>
              <th>Cell-Phone</th>
              <th>Status</th>
              <th className="editIcon">
                <FontAwesomeIcon icon="user-plus" />
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
                  {row.status ? (
                    <FontAwesomeIcon icon="thumbs-up" />
                  ) : (
                    <FontAwesomeIcon icon="thumbs-down" />
                  )}
                </td>
                <td className="editIcon">
                  <FontAwesomeIcon icon="edit" onClick={this.handleEdit} />
                  { this.props.showMenu ?
                  ( <div className='menu'> <button>Edit</button> <button>Delete</button> </div> ) 
                  : ( null ) 
                  } 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
Table.propTypes = {
  type: PropTypes.array
};

export default Table;
