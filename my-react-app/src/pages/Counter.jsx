import { ArrowClockwise, Play, Pause } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [stop, setStop] = useState(false);
  const handleClick = () => {
    setCounter(0);
  };
  useEffect(() => {
    if (stop) {
      const interval = setInterval(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [stop]);
  const handleStart = () => {
    setStop(!stop);
  };
  return (
    <>
      <div className="counter-container">
        <div className="counter">
          <p>{counter}</p>
        </div>
        <div className="btn-container">
          <button type="button" className="count-btn" onClick={handleStart}>
            {stop ? <Pause size={35} /> : <Play size={35} />}
          </button>
          <button type="button" className="count-btn reset" onClick={handleClick}>
            <ArrowClockwise size={35} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
