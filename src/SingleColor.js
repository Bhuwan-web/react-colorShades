import React, { useState } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ color, key }) => {
  const [info, setInfo] = useState("");
  const [r, g, b] = color.rgb;
  const hexVal = rgbToHex(r, g, b);
  const rgbVal = `rgb(${r},${g},${b})`;

  const color_code = `${
    color.type === "tint"
      ? `rgba(0, 0, 0, ${color.weight})`
      : `rgba(256, 256, 256, ${color.weight === 0 ? 50 : color.weight})`
  }`;
  const handleCopy = (e) => {
    navigator.clipboard.writeText(hexVal);
    setInfo("Copied to Clipboard");
    setTimeout(() => setInfo(""), 850);
  };
  return (
    <div
      style={{
        background: `${hexVal}`,
        color: color_code,
      }}
      className="color"
      onClick={(e) => handleCopy(e)}
    >
      <div>{color.weight}%</div>
      <div>{hexVal}</div>
      <div>{rgbVal}</div>
      <div className="info alert">{info}</div>
    </div>
  );
};

export default SingleColor;
