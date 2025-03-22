import { useReducer, type ReactNode } from 'react'
import SessionContext  from './SessionContext'
import { createDefaultSession, Session, SessionStatus, IntervalType } from '../types/Session';
import { SessionActionTypes, SessionAction} from '../types/SessionContext';
import { updateSessionForNextInterval } from '@/utils/SessionUtils';

interface SessionProviderProps {
    children: ReactNode;
}

function sessionReducer(session : Session, action: SessionAction) : Session{
  console.log("Reducer was called");
  switch(action.type){
    case SessionActionTypes.START_SESSION: {
        return {
          ...session,
          status: SessionStatus.RUNNING
        }
    }

    case SessionActionTypes.END_SESSION: {
      return {
        ...session,
        status: SessionStatus.FINISHED
      }
    }

    case SessionActionTypes.CONFIGURE_SESSION: {
      return {
        ...createDefaultSession(),
        configuration: action.configuration,
        status: SessionStatus.RUNNING,
        currentIntervalType: IntervalType.POMODORO
      }
    }

    case SessionActionTypes.NEXT_INTERVAL: {
      return updateSessionForNextInterval(session)
    }

  }
}

const SessionProvider = ({children} : SessionProviderProps) => {
  
  const [session, dispatch] = useReducer(sessionReducer, createDefaultSession())
  return (
    <SessionContext.Provider value={{session : session, dispatch: dispatch}}>
      {children}
    </SessionContext.Provider>
  )
}

export default SessionProvider
