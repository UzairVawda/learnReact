import React, { useEffect } from "react";

export default function Post({ title, body }) {
  useEffect(() => {
    console.log("post created");
    return () => {
      console.log("POST REMOVED");
    };
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}
