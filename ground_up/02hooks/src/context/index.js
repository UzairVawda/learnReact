import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = (props) => {
  const [state, setState] = useState({
    users: [
      { id: 1, name: "jess" },
      { id: 2, name: "jake" },
      { id: 3, name: "john" },
    ],
    active: true,
  });
  return (
    <MyContext.Provider value={{ state, setState }}>
      {props.children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
