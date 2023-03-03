import React from "react";
import "./App.css";
import Timer from "./Timer";
import Button from "./Button"

function App() {

  const handleClick = () => {
    alert("Button was clicked.")
  }

  return (
    <div className="App">
      <div className="header">Pomodoro Timer</div>
      <Timer />
      <Button text="Start" onClick={handleClick}/>
      <div className="footer">Copyright by Clowns</div>
    </div>
  );
}

export default App;
