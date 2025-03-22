import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SessionContext from "@/context/SessionContext";
import { SessionStatus, IntervalType } from "@/types/Session";
import { useContext } from "react";

const ProgressCard = () => {
  const { session } = useContext(SessionContext);

  const totalIntervals = session.configuration.totalPomodoros * 2;
  const completedIntervals = (() => {
    if (session.status === SessionStatus.NEW) {
      return 0;
    } else if (session.status === SessionStatus.RUNNING) {
      return session.currentIntervalType === IntervalType.POMODORO
        ? session.pomodorosCompleted * 2
        : session.pomodorosCompleted * 2 - 1;
    } else {
      return totalIntervals;
    }
  })();

  console.log(`Total: ${totalIntervals} -- Completed: ${completedIntervals}`);

  const intervalsStatusList = (() => {
    return [...Array(totalIntervals)].map((_, i) => {
      const intervalNumber = i + 1;
      if (intervalNumber === totalIntervals) {
        return (
          <li key={i}>
            {intervalNumber <= completedIntervals ? "✅" : "⏳"} Time for a long
            break 🧃
          </li>
        );
      } else if (intervalNumber % 2 == 0) {
        return (
          <li key={i}>
            {intervalNumber <= completedIntervals ? "✅" : "⏳"} Short Break{" "}
          </li>
        );
      } else {
        return (
          <li key={i}>
            {intervalNumber <= completedIntervals ? "✅" : "⏳"} Pomodoro #
            {Math.floor(intervalNumber / 2) + 1}
          </li>
        );
      }
    });
  })();

  return (
    <Card className=" mx-auto p-4 w-[420px]">
      <CardHeader>
        <h3 className="scroll-m-20 text-2xl font-semibold border-b tracking-tight">
          Session Progress
        </h3>
      </CardHeader>
      <CardContent>
        <ul className="my-6 ml-6 list-none [&>li]:mt-2">
          {intervalsStatusList}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ProgressCard;
