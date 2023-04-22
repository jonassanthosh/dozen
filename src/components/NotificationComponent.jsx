import React, { useState, useEffect } from "react";

function NotificationComponent({
  isBreakNotificationEnabled,
  isWaterNotificationEnabled,
}) {
  const workHoursStart = 9; // 9AM
  const workHoursEnd = 17; // 5PM
  const interval = 60 * 60 * 1000; // 1 hour

  useEffect(() => {
    const timerId = setInterval(() => {
      const currentHour = new Date().getHours();
      if (currentHour >= workHoursStart && currentHour < workHoursEnd) {
        if (isBreakNotificationEnabled) {
          new Notification("Time for a break!", {
            body: "Take a few minutes to stretch and relax.",
          });
        }
        if (isWaterNotificationEnabled) {
          new Notification("Stay hydrated!", {
            body: "It's time to drink some water.",
          });
        }
      }
    }, interval);

    return () => {
      clearInterval(timerId);
    };
  }, [isBreakNotificationEnabled, isWaterNotificationEnabled]);

  return null;
}

function App() {
  const [isBreakNotificationEnabled, setIsBreakNotificationEnabled] = useState(
    localStorage.getItem("isBreakNotificationEnabled") === "true" || false
  );
  const [isWaterNotificationEnabled, setIsWaterNotificationEnabled] = useState(
    localStorage.getItem("isWaterNotificationEnabled") === "true" || false
  );

  const handleBreakToggle = () => {
    const newValue = !isBreakNotificationEnabled;
    setIsBreakNotificationEnabled(newValue);
    localStorage.setItem("isBreakNotificationEnabled", newValue);
  };

  const handleWaterToggle = () => {
    const newValue = !isWaterNotificationEnabled;
    setIsWaterNotificationEnabled(newValue);
    localStorage.setItem("isWaterNotificationEnabled", newValue);
  };

  return (
    <div>
      <label>
        <input
          type='checkbox'
          checked={isBreakNotificationEnabled}
          onChange={handleBreakToggle}
        />
        Enable break notifications
      </label>
      <br />
      <label>
        <input
          type='checkbox'
          checked={isWaterNotificationEnabled}
          onChange={handleWaterToggle}
        />
        Enable water intake notifications
      </label>
      <NotificationComponent
        isBreakNotificationEnabled={isBreakNotificationEnabled}
        isWaterNotificationEnabled={isWaterNotificationEnabled}
      />
    </div>
  );
}

export default App;
