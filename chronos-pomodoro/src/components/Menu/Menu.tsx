import { useEffect, useState } from 'react'
import styles from './Menu.module.css'
import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'
import { RouterLink } from '../RouterLink/RouterLink'

type AvalibleThemes = 'dark' | 'light'

export const Menu = () => {

    const [theme, setTheme] = useState<AvalibleThemes>(() => {
        const storageTheme = (localStorage.getItem('theme') as AvalibleThemes) || 'dark'
        return storageTheme
    });

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        event.preventDefault()

        setTheme(preveTheme => {
            const nextTheme = preveTheme === 'dark' ? 'light' : 'dark'
            return nextTheme
        })
    }

    const nextThemeIcon = {
        dark: <SunIcon/>,
        light: <MoonIcon/>
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    return(
        <nav className={styles.menu}>
            <RouterLink href="/" className={styles.menuLink} aria-label='ir para a home' title='Ir para a Home'>
                <HouseIcon/>
            </RouterLink>

            <RouterLink href="/history" className={styles.menuLink} aria-label='verificar historico' title='Verificar Historico'>
                <HistoryIcon/>
            </RouterLink>

            <RouterLink href="/config" className={styles.menuLink} aria-label='configurações' title='Configurações'>
                <SettingsIcon/>
            </RouterLink>
            
            <RouterLink onClick={handleThemeChange} href="#" className={styles.menuLink} aria-label='mudar tema' title='Mudar Tema'>
                {nextThemeIcon[theme]}
            </RouterLink>
        </nav>
    )
}