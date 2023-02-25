import React, { useContext } from "react";
import UserItem from "./UserItem";
import { MyContext } from "../context";

const User = () => {
  const context = useContext(MyContext);
  return (
    <>
      <p>hello</p>
      {context.state.active
        ? context.state.users.map((user, i) => <UserItem key={i} user={user} />)
        : null}
      <button
        onClick={() =>
          context.setState((prevVal) => ({
            ...prevVal,
            active: !prevVal.active,
          }))
        }
      >
        toggle state
      </button>
    </>
  );
};

export default User;
