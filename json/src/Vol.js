import React from "react";
import Voln from "./data-vol.json";
function Vol() {
  return (
    <div>
      <h1>Volunteers</h1>
      {Voln.map((user, index) => {
        return (
          <div>
            <h3>{user.title}</h3>
            <img src={user.img} alt="images" />
            <h5>{user.age}</h5>
            <h5>{user.profession}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default Vol;
