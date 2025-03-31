import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";

const PomodoroMethodInfoCard = () => {
  return (
    <Card>
      <CardHeader>
        <h1 className="text-base sm:text-3xl md:text-4xl lg:text-5xl font-extrabold ">
          The Pomodoro Technique
        </h1>
        <CardDescription>Francesco Cirillo, 1980s</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The Pomodoro Technique is a time management method developed by
          Francesco Cirillo in the late 1980s. The core idea is to break work
          into focused intervals, usually 25 minutes, called "Pomodoros,"
          followed by a short break (typically 5 minutes). After completing four
          Pomodoros, you take a longer break of 15-30 minutes.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Here’s the basic structure:
        </p>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>Work for 25 minutes (Pomodoro): 5 gold coins</li>
          <li>Take a 5-minute break: 10 gold coins</li>
          <li>
            After 4 Pomodoros, take a longer break (15-30 minutes): 20 gold
            coins
          </li>
        </ul>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The technique helps maintain focus and productivity while preventing
          burnout, as the frequent breaks allow your brain to rest. It also
          encourages a sense of urgency, since you're working within a defined
          timeframe.
        </p>
      </CardContent>
      <CardFooter className="justify-center">
        <Link to="/sessionSettings">
          <Button> Start a Session</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PomodoroMethodInfoCard;
