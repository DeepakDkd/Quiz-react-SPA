import React, { useState, useEffect } from 'react';

const Timer = ({ duration, onTimeUp, questionIndex }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev === 1) {
          clearInterval(timer);
          onTimeUp();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [duration, onTimeUp, questionIndex]);  

  return (
    <div className="text-right text-red-500">
      {timeLeft} seconds left
    </div>
  );
};

export default Timer;
