import React from "react";

export const CountUp = () => {
  const [time, setTime] = React.useState(0);
  const [timeOn, setTimeOn] = React.useState(false);

  React.useEffect(() => {
    let interval = null;
    if (timeOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timeOn]);
  return (
    <>
      <div>
        <h1>COUNT UP</h1>
        <div>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        {!timeOn && time === 0 && (
          <button onClick={() => setTimeOn(true)}>START</button>
        )}
        {timeOn && <button onClick={() => setTimeOn(false)}>STOP</button>}
        {!timeOn && time > 0 && (
          <button onClick={() => setTime(0)}>RESET</button>
        )}
      </div>
    </>
  );
};
