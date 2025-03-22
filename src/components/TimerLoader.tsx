import SessionContext from '@/context/SessionContext'
import { useContext, useEffect, useState } from 'react'
import { IntervalType } from '@/types/Session';
import { minutesToMilliseconds } from '@/utils/TimerUtils';
import { completedIntervals } from '@/utils/SessionUtils';
import Timer from '@/components/Timer';
import { SessionActionTypes } from '@/types/SessionContext';

const TimerLoader = () => {
  const { session, dispatch } = useContext(SessionContext);
  const [ loading, setLoading] = useState(true);

  const timerType = session.currentIntervalType
  
  const timerInterval = (()=>{
    let intervalMinutes = 0
    if(timerType === IntervalType.POMODORO){
        intervalMinutes = session.configuration.pomodoroDuration
    } else if(timerType === IntervalType.SHORTBREAK){
        intervalMinutes = session.configuration.shortBreakDuration
    } else if(timerType === IntervalType.LONGBREAK){
        intervalMinutes = session.configuration.longBreakDuration
    } else {
        intervalMinutes = 0
    }
    return minutesToMilliseconds(intervalMinutes)
  })()

  useEffect(()=>{
    setLoading(false)
  },[session.currentIntervalType])

  const handleTimesUp = ()=>{
    console.log("handleTimesUp")
    setLoading(true)
    dispatch({
      type: SessionActionTypes.NEXT_INTERVAL
    })
  }

  return (
    <>
    {
      loading ? <div> Loading </div> : <Timer interval={timerInterval} type={timerType} timesUp={handleTimesUp} key={completedIntervals(session) + 1} />
    }
    </>
  )
}

export default TimerLoader