import React from "react";

const style = {
  background: "lightgrey",
};

const Card = (props) => {
  return (
    <div className="card" style={style}>
      {props.children}
    </div>
  );
};

export default Card;
