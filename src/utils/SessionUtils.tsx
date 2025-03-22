import { SessionStatus, IntervalType, Session } from "@/types/Session";

const totalIntervals = (totalPomodoros: number) : number =>{
    return totalPomodoros * 2 ; 
}

const completedIntervals = (session : Session) : number => {
  if (session.status === SessionStatus.NEW) {
    return 0;
  } else if (session.status === SessionStatus.RUNNING) {
    return session.currentIntervalType === IntervalType.POMODORO
      ? session.pomodorosCompleted * 2
      : session.pomodorosCompleted * 2 - 1;
  } else {
    return totalIntervals(session.configuration.totalPomodoros);
  }
};

const updateSessionForNextInterval = (session : Session) : Session => {
  const previouslyCompletedIntervals = completedIntervals(session)
  if(previouslyCompletedIntervals + 1 === totalIntervals(session.configuration.totalPomodoros)){
    return {
      ...session,
      status: SessionStatus.FINISHED,
      currentIntervalType: null
    }
  }

  const pomodorosCompleted = session.currentIntervalType === IntervalType.POMODORO ? session.pomodorosCompleted + 1 : session.pomodorosCompleted
  const currentIntervalType = session.currentIntervalType === IntervalType.POMODORO ? pomodorosCompleted === session.configuration.totalPomodoros ? IntervalType.LONGBREAK : IntervalType.SHORTBREAK : IntervalType.POMODORO
  
  return {
    ...session,
    pomodorosCompleted,
    currentIntervalType
  }
}

export { completedIntervals, updateSessionForNextInterval };