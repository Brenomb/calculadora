"use client";

import React, { useState } from "react";
import CalculatorButton from "../components/CalculatorButton";

const CalculatorPage: React.FC = () => {
  const [display, setDisplay] = useState<string>("");

  const handleButtonClick = (value: string) => {
    const commands = ["+", "-", "/", "*"];
    if (
      commands.includes(value) &&
      commands.includes(display.charAt(display.length - 1))
    ) {
      setDisplay((display) => display.slice(0, display.length - 1) + value);
    } else
      switch (value) {
        case "AC":
          setDisplay("");
          break;
        case "DEL":
          setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
          break;
        case "=":
          if (value === "=" && display.charAt(display.length - 1) === "") {
            setDisplay("0");
          } else {
            try {
              setDisplay(eval(display).toString());
            } catch (error) {
              setDisplay("Error");
            }
          }
          break;
        default:
          setDisplay((prevDisplay) => prevDisplay + value);
          break;
      }
  };

  return (
    <body className="m-0 bg-gradient-to-r from-pink-500 to-orange-500">
      <div className="container mx-auto mt-8 max-w-xs justify-center">
        <div className="h-14 col-span-full bg-black bg-opacity-75 flex flex-col items-end justify-around p-3 break-words">
          <div className="text-white text-1"></div>
          <div className="text-white text-2xl">{display}</div>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-4 ">
          <CalculatorButton
            className="col-span-2"
            value="AC"
            onClick={handleButtonClick}
          />
          <CalculatorButton value="DEL" onClick={handleButtonClick} />
          <CalculatorButton value="/" onClick={handleButtonClick} />
          <CalculatorButton value="1" onClick={handleButtonClick} />
          <CalculatorButton value="2" onClick={handleButtonClick} />
          <CalculatorButton value="3" onClick={handleButtonClick} />
          <CalculatorButton value="*" onClick={handleButtonClick} />
          <CalculatorButton value="4" onClick={handleButtonClick} />
          <CalculatorButton value="5" onClick={handleButtonClick} />
          <CalculatorButton value="6" onClick={handleButtonClick} />
          <CalculatorButton value="+" onClick={handleButtonClick} />
          <CalculatorButton value="7" onClick={handleButtonClick} />
          <CalculatorButton value="8" onClick={handleButtonClick} />
          <CalculatorButton value="9" onClick={handleButtonClick} />
          <CalculatorButton value="-" onClick={handleButtonClick} />
          <CalculatorButton value="." onClick={handleButtonClick} />
          <CalculatorButton value="0" onClick={handleButtonClick} />
          <CalculatorButton
            className="col-span-2"
            value="="
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </body>
  );
};

export default CalculatorPage;
