import React, { useState, useEffect, useRef } from "react";
import { MyObject } from "./App";

interface Props {
  inputTimes: MyObject[];
  isPaused: boolean;
}

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

const Timer: React.FC<Props> = ({ inputTimes, isPaused }) => {
  const [step, setStep] = useState(0);
  const [time, setTime] = useState(inputTimes[step].time);
  const isMountedRef = useRef(false);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      setTime(inputTimes[step].time);
      if (step === inputTimes.length - 1) {
        setStep(0);
      }
    }
  }, [step]);

  useEffect(() => {
    if (!isPaused && time > 0) {
      const intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (time === 0) {
      setStep((prevStep) => prevStep + 1);
      isMountedRef.current = false;
    }
  }, [isPaused, time]);

  return (
    <div>
      <h1>{formatTime(time)}</h1>
    </div>
  );
};

export default Timer;
