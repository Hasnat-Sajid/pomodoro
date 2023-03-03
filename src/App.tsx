import React, { useState } from "react";
import "./App.css";
import Timer from "./Timer";
import Button from "./Button"

function App() {
  const [isStarted, setStarted] = useState(false);
  const [isFocusPhase, setFocusPhase] = useState(true);
  const [countdownTime, setCountdown] = useState(10);
  const [phaseName, setPhaseName] = useState("Focus-Time");

  const handleClick = () => {
    setStarted(!isStarted);
  }

  const changePhase = (currentTime: number) => {
    if(currentTime === 0) {
      setFocusPhase(!isFocusPhase);
      if(isFocusPhase){
        setCountdown(10);
        setPhaseName("Focus-Time");
      } else {
        setCountdown(5);
        setPhaseName("Break");
      }
    }
  }

  return (
    <div className="App">
      <div className="header">Pomodoro Timer</div>

      { !isStarted ? 
        <Button text="Start" onClick={handleClick}/> 
        :
        <div className="timeCard">
        <div className="phase">Focus-Time</div>
        <Timer initialTime={countdownTime} timerFinished={changePhase}/>
        <Button text="Cancel" onClick={handleClick}/> 
        </div>
      }
      <div className="footer">Copyright by Clowns</div>
    </div>
  );
}

export default App;
