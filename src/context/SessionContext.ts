import { createContext } from "react";
import { createDefaultSession } from '../types/Session';
import { SessionContextProps } from "@/types/SessionContext";

const SessionContext = createContext<SessionContextProps>({
    session: createDefaultSession(),
    dispatch: () => {}
})

export default SessionContext;