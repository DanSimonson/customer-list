import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Table.css";

function Table({ data }) {
  let showStatus;

  const handleEdit = () => {};

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
          {data.map((row, index) => (
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
              <td className="editIcon" onClick={handleEdit}>
                <FontAwesomeIcon icon="edit" />
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
