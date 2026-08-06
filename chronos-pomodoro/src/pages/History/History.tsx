import { MainTemplate } from "../../templates/MainTemplate"
import { Container } from "../../components/Container/Container"
import { Heading } from "../../components/Heading/Heading"
import { DefaultButton } from "../../components/DefaultButton/DefaultButton"
import { TrashIcon } from "lucide-react"

import styles from './History.module.css'
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { formatDate } from "../../utils/formatDate"

export const History = () => {

    const {state} = useTaskContext()

    return (
        <>
            <MainTemplate>
                <Container>
                    <Heading>
                        <span>History</span>

                        <span
                            aria-label="Apagar todo o historico"
                            title="Apagar historico"
                            className={styles.buttonContainer}>
                            <DefaultButton color="red" icon={<TrashIcon />} />
                        </span>
                    </Heading>
                </Container>

                <Container>
                    <div className={styles.responsiveTable}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Tarefa</th>
                                    <th>Duração</th>
                                    <th>Data</th>
                                    <th>Status</th>
                                    <th>Tipo</th>
                                </tr>
                            </thead>

                            <tbody>
                                {state.tasks.map((tasks) => (
                                    <tr key={tasks.id}>
                                        <td>{tasks.name}</td>
                                        <td>{tasks.duration}min</td>
                                        <td>{formatDate(tasks.startDate)}</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </Container>
            </MainTemplate>
        </>
    )
} 