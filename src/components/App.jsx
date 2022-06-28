import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia"

function entryEmojis(emoji) {
  return (
    <Entry 
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
  )
}

function App() {
  return (
    <div>
      <h1>
       <span>EmojiPedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(entryEmojis)}
      </dl> 
    </div>
  );
}

export default App;
