import './styles/global.css'
import './styles/theme.css'

import { Home } from './pages/Home/index'
import type { TaskStateModel } from './models/TaslStateModel'
import { useState } from 'react'

const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:000',
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15,
    }
}

export const App = () => {

    const [state, setState] = useState(initialState)

    return <Home state={state} setState={setState}/>
} 