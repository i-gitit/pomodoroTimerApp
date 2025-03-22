import { createBrowserRouter } from "react-router-dom";
import SessionDashboard from "./components/SessionDashboard";
import PomodoroMethodInfoCard from "./components/PomodoroMethodInfoCard";
import SessionSettings from "./components/SessionSettings";
import SessionSummary from "./components/SessionSummary";

const routes = [
  { path: "/", element: <PomodoroMethodInfoCard /> },
  { path: "/sessionSettings", element: <SessionSettings /> },
  { path: "/session", element: <SessionDashboard /> },
  { path: "/sessionSummary", element: <SessionSummary/>}
];

const router = createBrowserRouter(routes);

export default router;
