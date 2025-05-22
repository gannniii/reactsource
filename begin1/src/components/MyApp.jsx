import React, { useState } from "react";
import MyButton from "./MyButton";

const MyApp = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  const btn1 = {
    padding: "16px",
    background: "pink",
  };

  const btn2 = {
    padding: "18px",
    background: "lightgray",
  };
  return (
    <div>
      <MyButton onClick={handleClick} count={count} style={btn1} />
      <MyButton onClick={handleClick} count={count} style={btn2} />
    </div>
  );
};

export default MyApp;
