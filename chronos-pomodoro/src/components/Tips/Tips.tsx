import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { GetNextCycle } from "../../utils/GetNextCycle"
import { getNextCycleType } from "../../utils/getNextCycleType"

export const Tips = () => {

    const { state } = useTaskContext()
    const nextCycle = GetNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)

    const tipsForWhenActiveTask  = {
        workTime: <span>Foque por {state.config.workTime} min</span>,
        shortBreakTime: <span>Descanse por {state.config.shortBreakTime} min</span>,
        longBreakTime: <span>Descanso longo</span>,
    }

    const tipsForNoActiveTask  = {
        workTime: <span>Próximo ciclo é de {state.config.workTime} min</span>,
        shortBreakTime: <span>Próximo descanso é de {state.config.shortBreakTime} min</span>,
        longBreakTime: <span>Próximo descanso será longo</span>,
    }

    return (
        <div>
            {!!state.activeTask && tipsForWhenActiveTask [state.activeTask.type]}
            {!state.activeTask && tipsForNoActiveTask [nextCycleType]}
        </div>
    )
}