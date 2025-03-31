import { useState, useEffect, useRef } from "react";
import { millisecondsToDisplayTime } from "../utils/TimerUtils";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardDescription,
} from "./ui/card";
import { Button } from "./ui/button";
import { Play, Pause, TimerReset } from "lucide-react";
import { IntervalType } from "@/types/Session";

interface TimerProps {
  interval: number;
  type: IntervalType | null;
  timesUp: () => void;
}

function getTitle(type: IntervalType | null): string {
  if (type == IntervalType.POMODORO) {
    return "Work Timer 🚀";
  } else if (type == IntervalType.SHORTBREAK) {
    return "Time for a short break 🍵";
  } else {
    return "Take a long break. RELAX 💤";
  }
}

function getDescription(type: IntervalType | null): string {
  if (type == IntervalType.POMODORO) {
    return "Focus now, conquer more—every minute brings you closer to success! 🔥";
  } else if (type == IntervalType.SHORTBREAK) {
    return "Pause, breathe, recharge—your next burst of brilliance is just a break away! ☕🚀";
  } else {
    return "Rest well—your next level of greatness begins after this break! 🌿🚀";
  }
}

const Timer = ({ interval, type, timesUp }: TimerProps) => {
  const intervalRef = useRef<any>(null);
  const [timeRemaining, setTimeRemaining] = useState(interval);
  const [isTimerRunning, setIsTimerRunnig] = useState(true);
  const displayTime = millisecondsToDisplayTime(timeRemaining);

  useEffect(() => {
    const intervalId = setInterval(updateRemainingTime, 1000);
    intervalRef.current = intervalId;

    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);

  useEffect(() => {3
    if (timeRemaining === 0) {
      timesUp();
    }
  }, [timeRemaining]);

  function updateRemainingTime() {
    setTimeRemaining((prevRemainingTime) => {
      if (prevRemainingTime - 1000 <= 0) {
        clearInterval(intervalRef.current);
        setIsTimerRunnig(false);
        return 0;
      }
      return prevRemainingTime - 1000;
    });
  }

  function handleStartTimer() {
    const intervalId = setInterval(updateRemainingTime, 1000);
    intervalRef.current = intervalId;
    setIsTimerRunnig(true);
  }

  function handlePauseTimer() {
    const intervalId = intervalRef.current;
    clearInterval(intervalId);
    setIsTimerRunnig(false);
  }

  function handleResetTimer() {
    handlePauseTimer();
    setTimeRemaining(interval);
  }

  return (
    <Card className="mx-auto p-4">
      <CardHeader>
        <h2 className="text-xl font-semibold">{getTitle(type)}</h2>
        <CardDescription>{getDescription(type)}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <p className="text-9xl font-bold">{displayTime}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center items-center ">
        <Button
          className="mx-5"
          variant="outline"
          onClick={isTimerRunning ? handlePauseTimer : handleStartTimer}
        >
          {isTimerRunning ? <Pause /> : <Play />}
        </Button>
        <Button className="mx-5" variant="outline" onClick={handleResetTimer}>
          <TimerReset />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Timer;
