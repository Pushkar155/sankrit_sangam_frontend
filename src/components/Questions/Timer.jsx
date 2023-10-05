import React, { useState, useEffect } from 'react';
import { useAuth } from '../../AuthContext';

const Timer = () => {
  const {isRunning,minutes,seconds, setSeconds, setMinutes}=useAuth()
  
  // const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        if (seconds < 59) {
          setSeconds(seconds + 1);
        } else {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, minutes, seconds]);

  return (
    <div>
      <h4>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </h4>
    </div>
  );
};

export default Timer;
