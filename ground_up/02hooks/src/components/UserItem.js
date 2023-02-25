import React from "react";

const UserItem = ({ user }) => {
  return (
    <div>
      <h3>{user.id}</h3>
      <p>{user.name}</p>
    </div>
  );
};

export default UserItem;
