import './styles/global.css'
import './styles/theme.css'

import { Home } from './pages/Home/index'
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'
export const App = () => {

    return (
        <TaskContextProvider>
            <Home></Home>
        </TaskContextProvider>
    )
} 