import './styles/global.css'
import './styles/theme.css'

import { Container } from './components/Container/Container'
import { Logo } from './components/Logo/Logo'
import { Menu } from './components/Menu/Menu'
import { CountDown } from './components/CountDown/CountDown'
import { DefaultInput } from './components/DefaultInput/DefaultInput'

export const App = () => {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>
            
            <Container>
                <form className='form'>
                    <div className="formRow">
                        <DefaultInput 
                        labelText='Task:' 
                        id='input' 
                        type='text' 
                        placeholder='Digite uma tarefa'/>
                    </div>

                    <div className="formRow">
                        <p>Lorem ipsum dolor sit</p>
                    </div>

                    <div className="formRow">
                        <p>Ciclos</p>
                        <p>0 0 0 0 0 </p>
                    </div>

                    <div className="formRow">
                        <button>Enviar</button>
                    </div>
                </form>
            </Container>
        </>
    )
} 