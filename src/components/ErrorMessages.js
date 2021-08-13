import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ErrorMessages = ({ message }) => {
  const [timeCount, setTimerCount] = useState(0);
  const timer = () => setTimerCount(0);
  const handleTimer = () => setTimeout(timer, 2000);

  useEffect(() => {
    if (message) {
      setTimerCount(true);
      handleTimer();
    }
    return () => clearTimeout(handleTimer);
  }, [message]);

  if (!message || !timerCount) {
    return null;
  }

  return createPortal(
    <div>
      <h3>I am Error Message</h3>
    </div>
  );
};

export default ErrorMessages;
