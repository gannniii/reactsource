import React from "react";

const MyStyle = () => {
  const style = {
    background: "black",
    color: "pink",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };
  return (
    <div>
      <div style={style}>김민성</div>
      <div style={{ color: "pink", fontSize: "25px" }}>김민성</div>
      {/* <input type="text" className="" maxLength={20} readOnly={false}/> */}
      <input type="text" className="" maxLength={20} readOnly={false} />
      <br />
    </div>
  );
};

export default MyStyle;
