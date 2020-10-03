import React from "react";
import ReactDOM from "react-dom";

//attribute camel case
//value converted to string
const customStyle = {
  color: "red",
  fontSize: "20px",
  borderColor: "green",
  borderWidth: "1px",
  borderStyle: "solid"
};

customStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 style={customStyle}>Hello World!</h1>
  </div>,
  document.getElementById("root")
);
