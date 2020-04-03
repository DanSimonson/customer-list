import React, { Component } from "react";
import PropTypes, { nominalTypeHack } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "./Table.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleDelete = (event, ID) => {};
  handleEdit = (event, ID) => {
    //push to edit page with correct route id stored in location
    this.props.history.push("/edit", { id: ID });
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
                        onClick={event => {
                          event.persist();
                          this.handleDelete(event, row.userID);
                        }}
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    );
  }
}
Table.propTypes = {
  type: PropTypes.array
};
/*class Box extends Component{
  render(){
    return(
      <Div> <button>Edit</button> <button>Delete</button> </Div>
    )
  }
}*/

export default withRouter(Table);
