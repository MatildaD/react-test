import React, { useState } from "react";
import "./Timer.css";
import TimerDisplay from "./TimerDisplay";
import useInterval from "../useInterval";
import "../Info.css";

export default function Timer(props) {
  const [date, setDate] = useState(new Date());
  const targetDate = getTargetDate();

  useInterval(() => {
    setDate(new Date());
  }, 1000);

  const note = new Date(Date.UTC(2021, 6, 18, 16, 0, 0)) - date > 0 ?  "Note: This counts down until the expected final day of Matilda's master's thesis." : "Matilda is a free elf!";

  const timeLeft = targetDate - date;
  return (
    <>
    <div className="timer-container">
      <div className="info-big-title">
        Time until graduation:
      </div>
      <TimerDisplay timeLeft={timeLeft} />
      <div className="timer-note">{note}</div>
      </div>
    </>
    
  );
}

function getTargetDate() {
  return new Date(Date.UTC(2021, 6, 18, 16, 0, 0));
}