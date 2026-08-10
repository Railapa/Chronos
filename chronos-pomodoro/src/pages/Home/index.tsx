import { MainTemplate } from "../../templates/MainTemplate"
import { Container } from "../../components/Container/Container"
import { CountDown } from "../../components/CountDown/CountDown"
import { MainForm } from "../../components/MainForm/MainForm"
import { useEffect } from "react"

export const Home = () => {
      useEffect(() => {
        document.title = 'Chronos Pomodoro'
      }, [])
      
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