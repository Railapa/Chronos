import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import { NotFound } from '../../components/NotFound/NotFound'
import { AboutPomodoro } from '../../components/AboutPomodoro/AboutPomodoro'
import { Home } from '../../pages/Home/index'
import { useEffect } from 'react'

function ScrollToTop () {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [pathname])

    return null
}

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-pomodoro' element={<AboutPomodoro />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            
            <ScrollToTop />
        </BrowserRouter>
    )
}