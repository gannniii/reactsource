import React, { useState } from "react";

const Profile = ({ name }) => {
  const [status, setstatus] = useState("Available");
  console.log("Profile Rendered");

  return (
    <div>
      <h3>Name : {name}</h3>
      <p>Status : {status}</p>
      <button onClick={() => setstatus("Away")}>Set Away</button>
      <button onClick={() => setstatus("Available")}>Set Away</button>
      <button>Set Available</button>
    </div>
  );
};

export default Profile;
