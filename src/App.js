import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [isError, setIsError] = useState(false);
  const initial_list = new Values("#f15025").all(10);
  const [list, setList] = useState(initial_list);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setIsError(false);
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch {
      setIsError(true);
      console.log("Enter the valid color code ");
    }
  };
  const handleError = (e) => {
    if ((e.target.value.length - 1) % 3 !== 0 || e.target.value.length > 7) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="color"
            id="input_color"
            placeholder="#f15025"
            className={isError ? "error" : ""}
            value={color}
            onChange={(e) => {
              handleError(e);
              setColor(e.target.value);
            }}
          />
          <button type="text" name="submit" value="Submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => (
          <SingleColor color={color} key={index} />
        ))}
      </section>
    </>
  );
}

export default App;
