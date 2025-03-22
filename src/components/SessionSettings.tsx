import { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";

import { Slider } from "@/components/ui/slider";

import { defaultSessionConfigurations } from "@/types/Session";
import SessionContext from "@/context/SessionContext";
import { SessionActionTypes } from "@/types/SessionContext";
import { Link } from "react-router-dom";

const SessionSettings = () => {
  const [sessionConfiguration, setSessionConfiguration] = useState(
    defaultSessionConfigurations()
  );
  const { dispatch } = useContext(SessionContext);

  const updateSessionConfiguration = (e: any) => {
    const element = e.target;
    setSessionConfiguration((prevSessionConfiguration) => {
      return {
        ...prevSessionConfiguration,
        [element.name]: element.value,
      };
    });
  };

  const saveSessionConfiguration = () => {
    dispatch({
      type: SessionActionTypes.CONFIGURE_SESSION,
      configuration: sessionConfiguration,
    });
  };

  return (
    <Card className="w-[420px]">
      <CardHeader>
        <h3 className="scroll-m-20 text-2xl font-semibold border-b tracking-tight">
          Pomodoro Session Configurations
        </h3>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <Label htmlFor="pomodoroDuration">
              Pomodoro Duration:{" "}
              <div className="text-lg font-semibold">
                {sessionConfiguration.pomodoroDuration} minutes
              </div>
            </Label>
            <Slider
              id="pomodoroDuration"
              name="pomodoroDuration"
              defaultValue={[sessionConfiguration.pomodoroDuration]}
              max={60}
              step={1}
              onChange={updateSessionConfiguration}
            />

            <Label htmlFor="shortBreakDuration">
              Short Break Duration:{" "}
              <div className="text-lg font-semibold">
                {sessionConfiguration.shortBreakDuration} minutes
              </div>
            </Label>
            <Slider
              id="shortBreakDuration"
              name="shortBreakDuration"
              defaultValue={[sessionConfiguration.shortBreakDuration]}
              max={60}
              step={1}
              onChange={updateSessionConfiguration}
            />

            <Label htmlFor="longBreakDuration">
              Long Break Duration:{" "}
              <div className="text-lg font-semibold">
                {sessionConfiguration.longBreakDuration} minutes
              </div>
            </Label>
            <Slider
              id="longBreakDuration"
              name="longBreakDuration"
              defaultValue={[sessionConfiguration.longBreakDuration]}
              max={60}
              step={1}
              onChange={updateSessionConfiguration}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button onClick={saveSessionConfiguration}>
          <Link to="/session">Begin ⏳</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SessionSettings;
