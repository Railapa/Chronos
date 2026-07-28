import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { GetNextCycle } from '../../utils/GetNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import styles from './Cycles.module.css'

export const Cycles = () => {

    const { state } = useTaskContext()

    const cycleStep = Array.from({ length: state.currentCycle })

    const cycleDescriptionMap = {
        workTime: 'foco',
        shortBreakTime: 'descanso curto',
        longBreakTime: 'descando longo'
    }

    return(
        <div className={styles.cycles}>
            <span>Ciclos:</span>

            <div className={styles.cycleDots}>
                {cycleStep.map((_, index) => {
                    const nextCycle = GetNextCycle(index)
                    const nextCycleType = getNextCycleType(nextCycle) 
                    return (
                        <span 
                        key={`${nextCycleType}_${nextCycle}`}
                        className={`${styles.cycleDot} ${styles[nextCycleType]}`} 
                        aria-label={`indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
                        title={`indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}