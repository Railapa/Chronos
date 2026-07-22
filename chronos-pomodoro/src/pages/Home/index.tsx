import { MainTemplate } from "../../templates/MainTemplate"
import { Container } from "../../components/Container/Container"
import { CountDown } from "../../components/CountDown/CountDown"
import { MainForm } from "../../components/MainForm/MainForm"
import type { TaskStateModel } from "../../models/TaslStateModel"

type HomeProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

export const Home = (props: HomeProps) => {

    const { state, setState } = props

    return (
        <>
            <MainTemplate>
                <Container>
                    <CountDown />
                </Container>

                <Container>
                    <MainForm />
                </Container>
            </MainTemplate>
        </>
    )
} 