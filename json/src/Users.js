import React from "react";
import User from "./data-users.json";

function Users() {
  return (
    <div>
      <h1>Users</h1>
      {User.map((user, index) => {
        return (
          <div className="column">
            <h3>{user.title}</h3>
            <img src={user.img} alt="images" />
          </div>
        );
      })}
    </div>
  );
}

export default Users;
