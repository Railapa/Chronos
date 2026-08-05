import styles from './Footer.module.css'
import { RouterLink } from '../RouterLink/RouterLink'

export const Footer = () => {
    return(
        <footer className={styles.footer}>
            <RouterLink href="/about-pomodoro">Entenda a técnica pomodoro 🍅</RouterLink>
            <a href=""> Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚</a>
        </footer>
    )
}