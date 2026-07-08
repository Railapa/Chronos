import styles from './Logo.module.css'
import { TimerIcon } from 'lucide-react'

export const Logo = () => {
    return(
        <div className={styles.logo}>
            <a href="" className={styles.logoLink}>
                <TimerIcon size={64}></TimerIcon>
                <span>Chronos</span>
            </a>
        </div>
    )
}