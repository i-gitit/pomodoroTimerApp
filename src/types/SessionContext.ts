import { Session } from "./Session"

export interface SessionContextProps {
    session: Session;
    dispatch: (action : SessionAction) => void;
}

export enum SessionActionTypes {
  START_SESSION,
  END_SESSION,
  CONFIGURE_SESSION,
  NEXT_INTERVAL
}

export type SessionAction = {
  type: SessionActionTypes;
  [key: string]: any;
}
