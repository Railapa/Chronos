import { useEffect, useState } from 'react'
import styles from './Menu.module.css'
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'

type AvalibleThemes = 'dark' | 'light'

export const Menu = () => {

    const [theme, setTheme] = useState<AvalibleThemes>('dark');

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault()
        console.log('oi', Date.now())

        setTheme(preveTheme => {
            const nextTheme = preveTheme === 'dark' ? 'light' : 'dark'
            return nextTheme
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    return(
        <nav className={styles.menu}>
            <h1>{theme}</h1>
            <a href="#" className={styles.menuLink} aria-label='ir para a home' title='Ir para a Home'>
                <HouseIcon/>
            </a>

            <a href="#" className={styles.menuLink} aria-label='verificar historico' title='Verificar Historico'>
                <HistoryIcon/>
            </a>

            <a href="#" className={styles.menuLink} aria-label='configurações' title='Configurações'>
                <SettingsIcon/>
            </a>
            
            <a onClick={handleThemeChange} href="#" className={styles.menuLink} aria-label='mudar tema' title='Mudar Tema'>
                <SunIcon/>
            </a>
        </nav>
    )
}