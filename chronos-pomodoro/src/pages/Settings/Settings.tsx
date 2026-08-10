import { SaveIcon } from "lucide-react"
import { Container } from "../../components/Container/Container"
import { DefaultButton } from "../../components/DefaultButton/DefaultButton"
import { DefaultInput } from "../../components/DefaultInput/DefaultInput"
import { Heading } from "../../components/Heading/Heading"
import { MainTemplate } from "../../templates/MainTemplate"
import { useEffect, useRef } from "react"
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext"
import { showMessage } from "../../adapter/showMessage"
import  { TaskActionTypes } from "../../contexts/TaskContext/taskActions"

export const Settings = () => {
    
        useEffect(() => {
            document.title = 'Configurações - Chronos Pomodoro'
        }, [])
    
    const {state, dispatch} = useTaskContext()

    const workTimeInput = useRef<HTMLInputElement>(null)
    const shortBreakTimeInput = useRef<HTMLInputElement>(null)
    const longBreakTimeInput = useRef<HTMLInputElement>(null)

    function handleSaveSettings (e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        showMessage.dismiss()

        const formErrors = []
        
        const workTime = Number(workTimeInput.current?.value)
        const shortBreakTime = Number(shortBreakTimeInput.current?.value)
        const longBreakTime = Number(longBreakTimeInput.current?.value)

        if(isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)){
            formErrors.push('Digite apenas números para TODOS os campos')
        }

        if(workTime < 1 || workTime > 99){
            formErrors.push('Digite valores entre 1 e 99 para foco')
        }

        if(shortBreakTime < 1 || shortBreakTime > 30){
            formErrors.push('Digite valores entre 1 e 30 para descanso curto')
        }

        if(longBreakTime < 1 || longBreakTime > 60){
            formErrors.push('Digite valores entre 1 e 60 para descanso longo')
        }

        if(formErrors.length > 0){
            formErrors.forEach(err => {
                showMessage.error(err)
            })
            return
        }

        dispatch({type: TaskActionTypes.CHANGE_SETTINGS, payload: {
            workTime,
            shortBreakTime,
            longBreakTime
        }})
        showMessage.sucess('Configurações salvas!')
    }

    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>

            <Container>
                <p style={{ textAlign: 'center'}}>Modifique as configurações para tempo de foco, descanso curso e descanso longo</p>
            </Container>

            <Container>
                <form onSubmit={handleSaveSettings}  action="" className="form">
                    <div className="formRow">
                        <DefaultInput
                            labelText="Foco (min):"
                            id="workTime"
                            ref={workTimeInput}
                            defaultValue={state.config.workTime}
                            type="number"
                        />
                    </div>

                    <div className="formRow">
                        <DefaultInput
                            labelText="Descanso Curto (min):"
                            id="shortBreakTime"
                            ref={shortBreakTimeInput}
                            defaultValue={state.config.shortBreakTime}
                            type="number"
                        />
                    </div>

                    <div className="formRow">
                        <DefaultInput
                            labelText="Descanso Longo (min):"
                            id="longBreakTime"
                            ref={longBreakTimeInput}
                            defaultValue={state.config.longBreakTime}
                            type="number"
                        />
                    </div>

                    <div className="formRow">
                        <DefaultButton icon={<SaveIcon />} aria-label="Salvar Configurações" title="Salvar Configurações" />
                    </div>
                </form>
            </Container>
        </MainTemplate>
    )
}