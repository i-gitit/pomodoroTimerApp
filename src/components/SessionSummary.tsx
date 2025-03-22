import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const SessionSummary = () => {
  return (
    <div className="h-full w-8/10 gap-4 p-4 bg-white shadow-lg rounded-lg text-center">
      <p className="text-6xl font-bold">🎯 Pomodoro Session Summary 🎯</p>
      <ul className="my-6 ml-6 mt-20 list-none [&>li]:mt-2">
        <li>
          <strong>Total Pomodoros Completed:</strong> 4 ✅
        </li>
        <li>
          <strong>Focused Work Time:</strong> 100 minutes (4 × 25 min) ⏳
        </li>
        <li>
          <strong>Short Breaks Taken:</strong> 3 (5 min each) ☕
        </li>
        <li>
          <strong>Long Break Earned:</strong> 15-30 minutes 🌿
        </li>
      </ul>

      <Link to="/sessionSettings">
          <Button className="mt-20 text-4xl size-fit"> Start a New Session 🚀</Button>
       </Link>
      
    </div>
  );
};

export default SessionSummary;
