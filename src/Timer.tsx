import React, { useState, useEffect } from "react";
import "./Timer.css";

interface Props {
  initialTime: number;
  timerFinished: (time: number) => void;
}

function convertSecondsToTimeFormat (seconds: number): string {
  return new Date(seconds * 1000).toISOString().substring(14, 19);
}

const Timer: React.FC<Props> = ({ initialTime, timerFinished }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  });
  timerFinished(time);
  return (
    <div className="timer">
      <h1>Time remaining: {convertSecondsToTimeFormat(time)} </h1>
    </div>
  );
};

export default Timer;
