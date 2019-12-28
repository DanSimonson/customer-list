import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Table.css";
function Table({ data, loading }) {
  console.log("data: ", data);
  console.log("loading: ", loading);
  let showStatus;
  if (loading) {
    showStatus = (
      <span>
        <FontAwesomeIcon icon="thumbs-down" />
      </span>
    );
  } else {
    showStatus = (
      <span>
        <FontAwesomeIcon icon="thumbs-up" />
      </span>
    );
  }
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
          {data.map((row, index) => (
            <tr key={row.userID}>
              <td>{row.userID}</td>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.email}</td>
              <td>{row.cellPhone}</td>
              <td>
                {row.status}
                <FontAwesomeIcon icon="thumbs-up" />
              </td>
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
