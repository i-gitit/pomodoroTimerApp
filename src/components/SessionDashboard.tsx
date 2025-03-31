import ProgressCard from "./ProgressCard";
import MotivationalQuote from "./MotivationalQuote";
import TimerLoader from "./TimerLoader";
import { useContext, useEffect } from "react";
import { Button } from "./ui/button";
import SessionContext from "@/context/SessionContext";
import { SessionStatus } from "@/types/Session";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SessionDashboard = () => {
  const { session } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (session.status === SessionStatus.FINISHED) {
      navigate("/sessionSummary");
    }
  }, [session.status]);

  return (
    <div className="grid grid-rows-8 grid-cols-16 h-full w-8/10 gap-4 p-4 bg-white shadow-lg rounded-lg">
      <div className="hidden sm:flex p-6 row-span-2 col-span-16 bg-blue-500 text-white flex items-center justify-center">
        <MotivationalQuote />
      </div>
      {session.status === SessionStatus.NEW ? (
        <div className="p-auto row-span-6 col-span-16 bg-green-500 text-white flex items-center justify-center">
          <div className="items-center justify-center">
            <h3 className="col-span-16 scroll-m-20 text-2xl font-semibold tracking-tight">
              ❗Looks like session is not configured properly.❗
            </h3>
            <Link to="/sessionSettings">
              <Button
                variant="secondary"
                className="col-span-16 mt-20 text-4xl size-fit"
              >
                Configure ⚙️ session and come back.
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="p-6 row-span-6 col-span-16 md:row-span-6 md:col-span-6 bg-red-500 text-white flex items-center justify-center">
            <ProgressCard />
          </div>
          <div className="p-6 row-span-4 col-span-16 md:col-span-10 bg-green-500 text-white flex items-center justify-center">
            {session.status !== SessionStatus.FINISHED && <TimerLoader />}
          </div>
          <div className="p-6 row-span-2 col-span-10 bg-yellow-500 text-white flex items-center justify-center">
            Session controls
          </div>
        </>
      )}
    </div>
  );
};

export default SessionDashboard;
