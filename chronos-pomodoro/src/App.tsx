import './styles/global.css'
import './styles/theme.css'

import { Container } from './components/Container/Container'
import { Logo } from './components/Logo/Logo'
import { Menu } from './components/Menu/Menu'
import { CountDown } from './components/CountDown/CountDown'
import { DefaultInput } from './components/DefaultInput/DefaultInput'
import { Cycles } from './components/Cycles/Cycles'
import { DefaultButton } from './components/DefaultButton/DefaultButton'
import { PlayCircleIcon } from 'lucide-react'
import { Footer } from './components/Footer/Footer'
import { useState } from 'react'

export const App = () => {

    const [numberLikes, setNumberLikes] = useState(0)
    const [like, setLike] = useState(false)

    function handleClick(){
        setLike(prevState => !prevState)
        setNumberLikes(prevState => like ? prevState - 1 : prevState + 1)
    }

    const styleButton = {
        backgroundColor: like ? '#1877f2' : '#e4e6eb',
        color: like ? '#fff' : '#000'
    }
    
    return (
        <>

            <h1>
                <button style={styleButton} onClick={handleClick}>{like ? 'Curtido' : 'Curtir'}</button>
                <span>{numberLikes}</span>
            </h1>

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
                            placeholder='Digite uma tarefa' />
                    </div>

                    <div className="formRow">
                        <p>Lorem ipsum dolor sit</p>
                    </div>

                    <div className="formRow">
                        <Cycles />
                    </div>

                    <div className="formRow">
                        <DefaultButton icon={<PlayCircleIcon />} />
                    </div>

                    <Container>
                        <Footer />
                    </Container>
                </form>
            </Container>
        </>
    )
} 