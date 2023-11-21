import React, { useState } from "react";

export function Miboton() {
  const [text, setText] = useState("Hola Mundo");

  const handleInput = () => {
    setText();
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </div>
  );
}
