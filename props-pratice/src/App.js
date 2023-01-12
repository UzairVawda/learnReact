import Joke from "./components/Joke.js"

function App() {
  return (
    <div>
      <ol>
        <li>
          <Joke 
            punchline="testing what happens when you dont pass all props"
            isPun={false}
            likeCount={10}
          />
        </li>
        <li>
          <Joke
            setup="I have a pet tree. Its like a bet dog."
            punchline="But the bark is quieter."
            isPun={false}
            likeCount={10}
            likedusers={["uzair", "john"]}
          />
        </li>
        <li>
          <Joke
          setup="A Sandwich walks into a bar."
          punchline="'Sorry we don't serve food here.'"
          isPun={true}
          likeCount={10}
          />
        </li>
        <li>
          <Joke
            setup="A day without sunshine is like, "
            punchline="you know, night."
            isPun={false}
            likeCount={10}
          />
        </li>
      </ol>
    </div>
  );
}

export default App;
