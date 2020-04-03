import React, { Component } from "react";
import PropTypes, { nominalTypeHack } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "./Table.css";
//import classes from "*.module.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      X: null,
      Y: null
      //toEdit: false
    };
  }
  handleDelete = (event, ID) => {};
  //console.log("props: ", this.props.data);
  handleEdit = (event, ID) => {
    //this.props.editToggle();
    //push to edit page with correct route id stored in location
    this.props.history.push("/edit", { id: ID });

    /*this.setState({
      toEdit: true
    });*/

    //console.log("props", this.props);
    //this.props.history.push("/edit");

    /*let x = event.clientX - 180;
    let y = event.clientY + 26;
    console.log("x: ", x);
    console.log("y: ", y);
    this.setState(
      {
        X: x,
        Y: y
      },
      () => {
        console.log("state x: ", this.state.X);
        console.log("state y: ", this.state.Y);
      }
    );*/
    //console.log("showMenu: ", showMenu);
  };

  render() {
    const divStyle = {
      //left: `${this.X}`,
      //top: `${this.Y}`,
      //position: "relative",
      width: "100px",
      backgroundColor: "white",
      border: "1px solid grey",
      boxShadow: "0 1px 2px -2px grey",
      zIndex: 999
    };

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
