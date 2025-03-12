import { useState, useEffect } from "react";


const SimpleClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format the time as HH:MM:SS
  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="h-full w-[30%] flex justify-between items-center">
      <span className="h-[20%] w-[50%] bg-base-300 rounded-4xl flex items-center justify-center">{formatTime(time)}</span>
    </div>
  );
};

export default SimpleClock;