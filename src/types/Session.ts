export interface SessionConfiguration {
  pomodoroDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  totalPomodoros: number;
}

export enum SessionStatus {
  NEW,
  RUNNING,
  FINISHED,
}

export enum IntervalType {
    POMODORO,
    SHORTBREAK,
    LONGBREAK
}

export interface Session {
  configuration: SessionConfiguration;
  status: SessionStatus;
  currentIntervalType: IntervalType | null;
  pomodorosCompleted: number;
}

export const defaultSessionConfigurations = (): SessionConfiguration => ({
  pomodoroDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  totalPomodoros: 4,
});

export const createDefaultSession = (): Session => {
  return {
    configuration: defaultSessionConfigurations(),
    status: SessionStatus.NEW,
    currentIntervalType: null,
    pomodorosCompleted: 0,
  };
};
