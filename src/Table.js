import React, { useState, useEffect } from "react";
import "./App.css";

const Table = ({ users }) => {
  const [sortedUsers, updateSortedUsers] = useState([]);

  useEffect(() => updateSortedUsers(users), [users]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th> </th>
            <th
              scope="col"
              onClick={() => {
                const usersCopy = [...users];
                const updateSort = usersCopy.sort((a, b) => {
                  const nameA = a.name.first;
                  const nameB = b.name.first;

                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }

                  return 0;
                });

                updateSortedUsers(updateSort);
              }}
            >
              <u>FirstName</u>
            </th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(
            ({
              picture: { thumbnail },
              phone,
              email,
              name: { first, last}
            }) => (
              <tr key={email}>
                  <td>
                  <img src={thumbnail} />
                </td>
                <th>{first}</th>
                <td>{last}</td>
                <td>{email}</td>
                <td>{phone}</td>
              

                <td></td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
