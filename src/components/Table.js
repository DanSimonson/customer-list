import React from "react";
import PropTypes from "prop-types";

function Table({ data }) {
  /*if (data[0]) {
    //return null;
    console.log("props:", data[0].firstName);
    console.log("props:", data[1].email);
  }*/

  return (
    <table>
      <thead>
        <tr>
          <th>User-Id</th>
          <th>First-Name</th>
          <th>Last-Name</th>
          <th>Email</th>
          <th>Cell-Phone</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.userID}>
            <td>{row.userID}</td>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>{row.email}</td>
            <td>{row.cellPhone}</td>
            <td>{row.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
Table.propTypes = {
  type: PropTypes.array
};

export default Table;
