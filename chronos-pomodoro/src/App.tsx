import './styles/global.css'
import './styles/theme.css'

import { Home } from './pages/Home/index'
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'
import { MessageContainer } from './components/MessagesContainer'
export const App = () => {

    return (
        <TaskContextProvider>
            <MessageContainer>
                <Home />
            </MessageContainer>
        </TaskContextProvider>
    )
} 