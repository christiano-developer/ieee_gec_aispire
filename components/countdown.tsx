"use client";
import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { JSX } from "react/jsx-dev-runtime";

// Time unit constants
const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

interface countProps {
  className?: string;
}

const timerProps = {
  isPlaying: true,
  size: 130,
  strokeWidth: 10,
  trailStrokeWidth: 9,
};

// Helper functions to calculate remaining time for each unit
const getTimeSeconds = (time: number): number =>
  Math.floor(time % minuteSeconds);
const getTimeMinutes = (time: number): number =>
  Math.floor((time % hourSeconds) / minuteSeconds);
const getTimeHours = (time: number): number =>
  Math.floor((time % daySeconds) / hourSeconds);
const getTimeDays = (time: number): number => Math.floor(time / daySeconds);

// Render the time component for each circle
const renderTime = (dimension: string, time: number): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl font-bold text-gray-200">{time}</div>
      <div className="text-sm uppercase text-gray-200">{dimension}</div>
    </div>
  );
};

// Main Countdown component
const Countdown: React.FC<countProps> = ({ className }) => {
  const startTime = Math.floor(Date.now() / 1000); // Current UNIX timestamp in seconds
  const targetDate = new Date("2025-04-05T17:59:59Z").getTime() / 1000; // Target date in seconds
  const remainingTime = Math.max(targetDate - startTime, 0); // Remaining time in seconds
  const [isTimerActive, setIsTimerActive] = useState(true);

  useEffect(() => {
    if (remainingTime <= 0) {
      setIsTimerActive(false); // Deactivate the timer if expired
    }
  }, [remainingTime]);

  // Calculate the duration for the "Days" timer
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div
      className={`min-h-fit flex space-x-3 items-center justify-center text-gray-800 ${className}`}
    >
      {/* Days Timer */}
      <CountdownCircleTimer
        {...timerProps}
        strokeLinecap="square"
        colors="#9EC8B9"
        trailColor="#5C8374"
        duration={daysDuration}
        isPlaying={isTimerActive}
        initialRemainingTime={remainingTime}
        onComplete={() => ({ shouldRepeat: true })}
      >
        {({ elapsedTime }) =>
          renderTime("Days", getTimeDays(daysDuration - elapsedTime))
        }
      </CountdownCircleTimer>
      {/* Hours Timer */}
      <CountdownCircleTimer
        {...timerProps}
        strokeLinecap="square"
        trailColor="#5C8374"
        colors="#9EC8B9"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        isPlaying={isTimerActive}
        onComplete={() => ({ shouldRepeat: true })}
      >
        {({ elapsedTime }) =>
          renderTime("Hours", getTimeHours(daySeconds - elapsedTime))
        }
      </CountdownCircleTimer>
      {/* Minutes Timer */}
      <CountdownCircleTimer
        {...timerProps}
        strokeLinecap="square"
        colors="#9EC8B9"
        trailColor="#5C8374"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        isPlaying={isTimerActive}
        onComplete={() => ({ shouldRepeat: true })}
      >
        {({ elapsedTime }) =>
          renderTime("Minutes", getTimeMinutes(hourSeconds - elapsedTime))
        }
      </CountdownCircleTimer>

      {/* Seconds Timer */}
      <CountdownCircleTimer
        {...timerProps}
        strokeLinecap="square"
        colors="#9EC8B9"
        trailColor="#5C8374"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        isPlaying={isTimerActive}
        onComplete={() => ({ shouldRepeat: true })}
      >
        {({ elapsedTime }) =>
          renderTime("Seconds", getTimeSeconds(minuteSeconds - elapsedTime))
        }
      </CountdownCircleTimer>
    </div>
  );
};

export default Countdown;
