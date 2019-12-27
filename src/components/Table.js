import React from "react";
import PropTypes from "prop-types";
import "./Table.css";
function Table({ data }) {
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
    </main>
  );
}
Table.propTypes = {
  type: PropTypes.array
};

export default Table;
