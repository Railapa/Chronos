import { SaveIcon } from "lucide-react"
import { Container } from "../../components/Container/Container"
import { DefaultButton } from "../../components/DefaultButton/DefaultButton"
import { DefaultInput } from "../../components/DefaultInput/DefaultInput"
import { Heading } from "../../components/Heading/Heading"
import { MainTemplate } from "../../templates/MainTemplate"

export const Settings = () => {
    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>

            <Container>
                <p style={{ textAlign: 'center'}}>Modifique as configurações para tempo de foco, descanso curso e descanso longo</p>
            </Container>

            <Container>
                <form action="" className="form">
                    <div className="formRow">
                        <DefaultInput
                            labelText="Foco (min):"
                            id="workTime"
                        />
                    </div>

                    <div className="formRow">
                        <DefaultInput
                            labelText="Descanso Curto (min):"
                            id="shortBreakTime"
                        />
                    </div>

                    <div className="formRow">
                        <DefaultInput
                            labelText="Descanso Longo (min):"
                            id="longBreakTime"
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