import React, { useState } from "react";

const TokenExample = (props) => {

  const {
    bgColor = "",
    gdColors = [],
    padding = "",
    iconSize = "w-12 h-12",
    border = "",
    rounded = "rounded-lg",
    content = "",
    shadow = "",
    chess = false,
    opacity = "",
    fontsize = "",
    fontweight = "",
    letterspacing ="",
    fontcolor =""
  } = props;

  const chessStyle = {
    background:
      "linear-gradient(45deg,rgba(43,40,38,.1) 25%,transparent 0),linear-gradient(-45deg,rgba(43,40,38,.1) 25%,transparent 0),linear-gradient(45deg,transparent 75%,rgba(43,40,38,.1) 0),linear-gradient(-45deg,transparent 75%,rgba(43,40,38,.1) 0)",
    backgroundPosition: "0 0,0 6px,6px -6px,-6px 0",
    overflow: "hidden",
    backgroundSize: "12px 12px",
  };

  const coverStyle = {
    width: "100%",
    height: "100%",
    background: "#F7B43E",
    opacity: opacity
  };

  

  const divStyle = {
    background: bgColor
      ? bgColor
      : `linear-gradient(180deg, ${gdColors[0]} 0%, ${gdColors[1]} 100%)`,
    boxShadow: shadow,
  };

  return (
    <div
      className={`box-border bg-gray ${iconSize} ${rounded}  ${border} ${padding} ${fontsize} ${fontweight} ${letterspacing} ${fontcolor}`}
      style={chess ? chessStyle : divStyle}
    >
      {chess ? <div style={coverStyle}></div> : content}
    </div>
  );
};

export default TokenExample;
