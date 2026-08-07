import { MainTemplate } from "../../templates/MainTemplate"
import { Container } from "../../components/Container/Container"
import { Heading } from "../../components/Heading/Heading"
import { DefaultButton } from "../../components/DefaultButton/DefaultButton"
import { TrashIcon } from "lucide-react"

import styles from './History.module.css'
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { formatDate } from "../../utils/formatDate"
import { getTaskStatus } from "../../utils/getTaskStatus"
import { sortTasks, type SortTasksOptions } from "../../utils/sortTasks"
import { useMemo, useState } from "react"
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions"

export const History = () => {
    const { state, dispatch } = useTaskContext()
    const hasTasks = state.tasks.length > 0

    const [sortConfig, setSortConfig] = useState<{
        field: SortTasksOptions['field']
        direction: SortTasksOptions['direction']
    }>({
        field: 'startDate',
        direction: 'desc',
    })

    const sortedTasks = useMemo(() => {
        return sortTasks({
            tasks: state.tasks,
            field: sortConfig.field,
            direction: sortConfig.direction,
        })
    }, [state.tasks, sortConfig])

    function handleSortTasks({ field }: Pick<SortTasksOptions, 'field'>) {
        setSortConfig(prev => ({
            field,
            direction: prev.field === field && prev.direction === 'desc' ? 'asc' : 'desc',
        }))
    }

    function handleResetHistory() {
        if (!confirm('Tem certeza')) return

        dispatch({ type: TaskActionTypes.RESET_STATE })
    }

    return (
        <>
            <MainTemplate>
                <Container>
                    <Heading>
                        <span>History</span>
                        {hasTasks && (
                            <span
                                aria-label="Apagar todo o historico"
                                title="Apagar historico"
                                className={styles.buttonContainer}>
                                <DefaultButton color="red" icon={<TrashIcon />} onClick={handleResetHistory} />
                            </span>
                        )}
                    </Heading>
                </Container>

                <Container>
                    {hasTasks && (
                        <div className={styles.responsiveTable}>
                            <table>
                                <thead>
                                    <tr>
                                        <th onClick={() => handleSortTasks({ field: 'name' })} className={styles.thSort}>Tarefa ↕</th>
                                        <th onClick={() => handleSortTasks({ field: 'duration' })} className={styles.thSort}>Duração ↕</th>
                                        <th onClick={() => handleSortTasks({ field: 'startDate' })} className={styles.thSort}>Data ↕</th>
                                        <th>Status</th>
                                        <th>Tipo</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {sortedTasks.map((tasks) => {
                                        const taskTypeDictionary = {
                                            workTime: 'Foco',
                                            shortBreakTime: 'Descanso Curto',
                                            longBreakTime: 'Descanso Longo'
                                        }

                                        return (
                                            <tr key={tasks.id} >
                                                <td>{tasks.name}</td>
                                                <td>{tasks.duration}min</td>
                                                <td>{formatDate(tasks.startDate)}</td>
                                                <td>{getTaskStatus(tasks, state.activeTask)}</td>
                                                <td>{taskTypeDictionary[tasks.type]}</td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    )}

                    {!hasTasks && (
                        <p style={{ textAlign: "center", fontWeight: "bold" }}>Ainda não existem tarefas criadas.</p>
                    )}
                </Container>
            </MainTemplate >
        </>
    )
} 