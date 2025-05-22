import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("black");

  return (
    <div>
      <div>
        <button onClick={() => setMessage("HI")}>입장</button>
        <button onClick={() => setMessage("BYE")}>퇴장</button>
      </div>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        RED
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        BLUE
      </button>
      <button style={{ color: "pink" }} onClick={() => setColor("pink")}>
        PINK
      </button>
    </div>
  );
};

export default Say;
