import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleButtonClick = (content) => {
    if (content === "C") {
      setValue("");
    } else if (content === "=") {
      try {
        setValue(eval(value).toString()); // Evaluate the expression (use caution in real apps)
      } catch (e) {
        setValue("Error");
      }
    } else {
      setValue((prev) => prev + content);
    }
  };

  const buttons = [
    { content: "C", className: "clear" },
    { content: "/", className: "" },
    { content: "*", className: "" },
    { content: "7", className: "" },
    { content: "8", className: "" },
    { content: "9", className: "" },
    { content: "-", className: "" },
    { content: "4", className: "" },
    { content: "5", className: "" },
    { content: "6", className: "" },
    { content: "+", className: "plus" },
    { content: "1", className: "" },
    { content: "2", className: "" },
    { content: "3", className: "" },
    { content: "0", className: "" },
    { content: "00", className: "" },
    { content: ".", className: "" },
    { content: "=", className: "equal" },
  ];

  return (
    <div className="container">
      <form className="calculator">
        <input
          type="text"
          className="value"
          readOnly
          value={value}
          placeholder="0"
        />
        {buttons.map((button, index) => (
          <span
            key={index}
            className={`num ${button.className}`}
            onClick={() => handleButtonClick(button.content)}
          >
            <i>{button.content}</i>
          </span>
        ))}
      </form>
    </div>
  );
}

export default App;
