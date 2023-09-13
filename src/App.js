import "./styles.css";
import react, { useState } from "react";

const emojilibrary = {
  "👺": "Goblin",
  "👹": "Ogre",
  "👻": "Ghost",
  "💀": "Skull",
  "👽": "Alien",
  "🎃": "Halloween"
};
var name;
const emojis = Object.keys(emojilibrary);

export default function App() {
  const [emoji, setemoji] = useState("");
  const [meaning, setmeanig] = useState("");

  function inputHandler(event) {
    var emojiName = event.target.value;
    name = emojilibrary[emojiName];
    setemoji(emojiName);

    if (emojiName in emojilibrary) {
      setmeanig(name);
    } else {
      setmeanig("we dont have it");
    }
  }

  function clickHandler(emojis) {
    setmeanig(emojilibrary[emojis]);
  }
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
      <h2>{meaning}</h2>
      {emojis.map((emoji) => (
        <span
          key={emoji}
          onClick={() => clickHandler(emoji)}
          style={{ fontSize: "2rem", textAlign: "center", cursor: "pointer" }}
        >
          {emoji}
        </span>
      ))}

      <h3></h3>
    </div>
  );
}
