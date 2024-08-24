import React from "react";
import "./App.css";
import Keypad from "./keypad";

function App() {
  const [input, setInput] = React.useState("");
  function handleClick(value) {
    setInput(input + value);
  }
  function calculate(value) {
    //let outputval=eval(input)
    //setInput(outputval)
    try {
      let outputval = eval(input);
      setInput(outputval);
    } catch (error) {
      setInput("e");
    }
  }
  function handleClear() {
    setInput("");
  }
  const handleBack = () => {
    try {
      let outputvalue = input.slice(0, -1);
      setInput(outputvalue);
      //setInput((input) => input.slice(0, -1));
    } catch (error) {
      setInput("");
    }
  };
  return (
    <div className="container">
      <h1>Calculator App</h1>
      <div>
        <input type="text" value={input} className="output"></input>
        <Keypad
          handleClick={handleClick}
          handleClear={handleClear}
          calculate={calculate}
          handleBack={handleBack}
        ></Keypad>
      </div>
    </div>
  );
}

export default App;
