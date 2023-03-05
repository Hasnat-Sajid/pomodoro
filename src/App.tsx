import React, { useState } from "react";
import "./App.css";
import Timer from "./Timer";
import Button from "./Button";

export interface MyObject {
  time: number;
  isFocus: boolean;
}

function App() {
  const [isStarted, setStarted] = useState(false);
  const [isPaused, setPaused] = useState(false);

  let x = 1500;
  let y = 300;
  let z = 900;

  const timesArray: MyObject[] = [
    { time: x, isFocus: true },
    { time: y, isFocus: false },
    { time: z, isFocus: false },
    { time: x, isFocus: true }, //hacky approach
  ];

  const handleClick = () => {
    setStarted(!isStarted);
    setPaused(false);
  };

  const handlePause = () => {
    setPaused(!isPaused);
  };

  return (
    <div className="App">
      <div className="header">Pomodoro Timer</div>
      {isStarted ? (
        <>
          <Timer isPaused={isPaused} inputTimes={timesArray} />
          {isPaused ? (
            <Button text="Resume" onClick={handlePause} />
          ) : (
            <Button text="Pause" onClick={handlePause} />
          )}
          <Button text="Cancel" onClick={handleClick} />
        </>
      ) : (
        <Button text="Start" onClick={handleClick} />
      )}
      <div className="footer">Copyright by Clowns</div>
    </div>
  );
}

export default App;
