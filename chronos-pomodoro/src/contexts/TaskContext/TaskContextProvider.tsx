import { useEffect, useReducer, useRef } from "react";
import { TaskContext } from "./TaskContext";
import { initialTaskState } from "./initialTaskState";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workers/TimerWorkerManage";
import { TaskActionTypes } from "./taskActions";
import { loadBeep } from "../../utils/loadBeep";
import type { TaskStateModel } from "../../models/TaslStateModel";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {

  const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
    const storageState = localStorage.getItem('state') || null

    if(storageState === null) return initialTaskState

    const parsedStorageState = JSON.parse(storageState) as TaskStateModel

    return {
      ...parsedStorageState,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: '00:00',
      currentCycle: 0
    }
  })


  const playBeepRef = useRef<() => void | null>(null)

  const worker = TimerWorkerManager.getInstance()

  useEffect(() => {
    worker.onmessage(e => {
      const countDownSeconds = e.data
  
      if (countDownSeconds <= 0) {
  
        if(playBeepRef.current){
          playBeepRef.current()
        }
  
        dispatch({
          type: TaskActionTypes.COMPLETE_TASK,
        })
        worker.terminate()
      } else {
        dispatch({
          type: TaskActionTypes.COUNT_DOWN,
          payload: { secondsRemaining: countDownSeconds }
        })
      }
    })
  }, [worker])

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))

    if (!state.activeTask) {
      worker.terminate()
    }
    
    document.title = `${state.formattedSecondsRemaining} - Chronos Pomodoro`

    worker.postMessage(state)
  }, [state, worker])

useEffect(() => {
  if(state.activeTask && playBeepRef.current === null){
    playBeepRef.current = loadBeep()
  }
}, [state.activeTask])

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}