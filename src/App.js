import "./styles.css";
import react, { useState } from "react";

const library = {
  "👺": "Goblin",
  "👹": "Ogre",
  "👻": "Ghost",
  "💀": "Skull",
  "👽": "Alien",
  "🎃": "Halloween"
};

export default function App() {
  const [emoji, setemoji] = useState("");

  function inputHandler(event) {
    var emojiName = event.target.value;
    setemoji(emojiName);
  }
  function matchmaking(libEmj) {}

  return (
    <div className="App">
      <h1 style={{ color: "blue" }} className="hello">
        Its Halloween 🎃
      </h1>
      <input
        style={{ padding: "1.2rem", textAlign: "center" }}
        placeholder="enter an emoji"
        onChange={inputHandler}
      ></input>
      <h2>{emoji}</h2>
      <h2>{}</h2>
    </div>
  );
}
