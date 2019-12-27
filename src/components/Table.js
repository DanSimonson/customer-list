import React, { PropTypes } from "react";

const Table = props => {
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
      <tbody></tbody>
    </table>
  );
};
Table.propTypes = {};

export default Table;
