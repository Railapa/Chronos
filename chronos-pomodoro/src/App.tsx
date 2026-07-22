import './styles/global.css'
import './styles/theme.css'

import { Home } from './pages/Home/index'
import type { TaskStateModel } from './models/TaslStateModel'
import { useState } from 'react'
import { TaskContext } from './contexts/TaskContext/TaskContext'

const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
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

    return (
        <TaskContext.Provider value={{ outraCoisa: 123 }}>
            <Home />
        </TaskContext.Provider>
    )
} 