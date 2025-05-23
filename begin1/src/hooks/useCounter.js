import React, { useState } from "react";

const useCounter = (initiaValue) => {
  // useState : 변수명, 함수명
  const [count, setCount] = useState(initiaValue);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return { count, increase, decrease };
};

export default useCounter;
