import React from "react";
// import { Link } from "react-router-dom";s

const AdjacentComp = () => {
  // const post = [
  //   { id: 1, name: "post 1" },
  //   { id: 2, name: "post 2" },
  //   { id: 3, name: "post 3" },
  // ];
  return (
    // <div>
    //   <p>Allows us to return adjacent elements</p>
    //   {post.map((item) => (
    //     <div key={item.id}>
    //       <Link>{item.name}</Link>
    //       <br />
    //     </div>
    //   ))}
    // </div>
    [<div key="1">hello</div>, <p key="3">adjacent element</p>]
  );
};

export default AdjacentComp;
