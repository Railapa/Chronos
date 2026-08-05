import './styles/global.css'
import './styles/theme.css'

import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'
import { MessageContainer } from './components/MessagesContainer'
import { MainRouter } from './routers/MainRouter/MainRouter'

export const App = () => {

    return (
        <TaskContextProvider>
            <MessageContainer>
                <MainRouter/>
            </MessageContainer>
        </TaskContextProvider>
    )
} 