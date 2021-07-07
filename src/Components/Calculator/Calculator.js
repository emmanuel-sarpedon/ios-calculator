import "./Calculator.scss";

import Buttons from "../Buttons/Buttons";

import { useState } from "react";

const Calculator = () => {
  const [memory, setMemory] = useState("");
  const [display, setDisplay] = useState("0");
  const [isOperatorLastAction, setIsOperatorLastAction] = useState(false);

  const handleOptionReset = () => {
    setMemory("");
    setDisplay("0");
    setIsOperatorLastAction(false);
  };

  const handleDigit = (number) => {
    if (isOperatorLastAction) {
      setDisplay(number);
    } else {
      if (display && display !== 0 && display !== "0") {
        setDisplay(display + number);
      } else {
        setDisplay(number);
      }
    }
    setMemory(memory + number);
    setIsOperatorLastAction(false);
  };

  const handleOperator = (operator) => {
    if (isOperatorLastAction && operator !== "=") {
      let newMemory = [...memory];
      newMemory[newMemory.length - 1] = operator;
      setMemory(newMemory.join(""));
    } else {
      if (operator !== "=") {
        setDisplay(eval(memory));
        setMemory(memory + operator);
      } else if (!isOperatorLastAction && operator === "=") {
        setDisplay(eval(memory));
        setMemory("");
      }
    }
    setIsOperatorLastAction(true);
  };

  const handleOptionInvert = () => {
    const indexOfDisplay = memory.lastIndexOf(display);

    let newMemory = [...memory];

    if (newMemory[indexOfDisplay - 1] === "+") {
      newMemory[indexOfDisplay - 1] = "-";
    } else if (newMemory[indexOfDisplay - 1] === "-") {
      newMemory[indexOfDisplay - 1] = "+";
    } else {
      newMemory[indexOfDisplay] = -display;
    }

    setMemory(newMemory.join(""));

    setDisplay(-display);
  };

  const handleOptionPercent = () => {
    const indexOfDisplay = memory.lastIndexOf(display);

    let newMemory = [...memory];

    newMemory[indexOfDisplay] = display / 100;

    setMemory(newMemory.join(""));

    setDisplay(display / 100);
  };
  return (
    <div className="Calculator">
      <div className="header"></div>
      <div className="display">{display}</div>
      <div className="keys">
        <Buttons text="AC" className="option" onClick={handleOptionReset} />
        <Buttons text="±" className="option" onClick={handleOptionInvert} />
        <Buttons text="%" className="option" onClick={handleOptionPercent} />
        <Buttons
          text="÷"
          className="operator"
          onClick={() => handleOperator("/")}
        />
        <Buttons text="7" className="digit" onClick={() => handleDigit("7")} />
        <Buttons text="8" className="digit" onClick={() => handleDigit("8")} />
        <Buttons text="9" className="digit" onClick={() => handleDigit("9")} />
        <Buttons
          text="x"
          className="operator"
          onClick={() => handleOperator("*")}
        />
        <Buttons text="4" className="digit" onClick={() => handleDigit("4")} />
        <Buttons text="5" className="digit" onClick={() => handleDigit("5")} />
        <Buttons text="6" className="digit" onClick={() => handleDigit("6")} />
        <Buttons
          text="-"
          className="operator"
          onClick={() => handleOperator("-")}
        />
        <Buttons text="1" className="digit" onClick={() => handleDigit("1")} />
        <Buttons text="2" className="digit" onClick={() => handleDigit("2")} />
        <Buttons text="3" className="digit" onClick={() => handleDigit("3")} />
        <Buttons
          text="+"
          className="operator"
          onClick={() => handleOperator("+")}
        />
        <Buttons
          text="0"
          className="digit digit-large"
          onClick={() => handleDigit("0")}
        />
        <Buttons text="," className="digit" onClick={() => handleDigit(".")} />
        <Buttons
          text="="
          className="operator"
          onClick={() => handleOperator("=")}
        />
      </div>
    </div>
  );
};

export default Calculator;
