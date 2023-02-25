import React, { useEffect, useState } from "react";
import Post from ".components/Post";

export default function App({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  const [state, setState] = useState({
    count: initialCount,
    user: "uzair",
  });
  const [posts, setPosts] = useState([
    { title: "title 1", body: "body 2" },
    { title: "title 1", body: "body 2" },
    { title: "title 1", body: "body 2" },
  ]);
  const [currPost, setCurrPost] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    console.log("no dependency array means it runs every time");
  });

  useEffect(() => {
    console.log("empty dependency array means it runs only once on mount");
  }, []);

  useEffect(() => {
    console.log(
      "item dependency array means it runs only when the item in the dependency array is modified"
    );
  }, [state]);

  return (
    <>
      <h1
        onClick={() =>
          setState((prevVal) => ({
            ...prevVal,
            user: state.user + Math.random(),
          }))
        }
      >
        {state.user}
      </h1>
      <h3>counter: {state.count}</h3>
      <button
        onClick={() =>
          setState((prevVal) => ({ ...prevVal, count: prevVal.count + 1 }))
        }
      >
        increment
      </button>
      <button
        onClick={() =>
          setState((prevVal) => ({ ...prevVal, count: prevVal.count - 1 }))
        }
      >
        decrement
      </button>
      {posts.map((item, i) => (
        <Post title={item.title} body={item.body} key={i} />
      ))}

      <input
        value={currPost.title}
        type="text"
        onChange={(e) =>
          setCurrPost((prevVal) => ({
            ...prevVal,
            title: e.target.value,
          }))
        }
      />
      <input
        value={currPost.body}
        type="text"
        onChange={(e) =>
          setCurrPost((prevVal) => ({
            ...prevVal,
            body: e.target.value,
          }))
        }
      />
      <button onClick={() => setPosts((prevVal) => [...prevVal, currPost])}>
        addPost
      </button>
      <button onClick={() => setPosts((prevVal) => [])}>removePosts</button>
    </>
  );
}
