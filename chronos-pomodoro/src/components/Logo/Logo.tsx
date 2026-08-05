import styles from './Logo.module.css'
import { TimerIcon } from 'lucide-react'
import { RouterLink } from '../RouterLink/RouterLink'

export const Logo = () => {
    return(
        <div className={styles.logo}>
            <RouterLink href="/" className={styles.logoLink}>
                <TimerIcon size={64}></TimerIcon>
                <span>Chronos</span>
            </RouterLink>
        </div>
    )
}