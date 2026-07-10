import styles from './DefaultButton.module.css'

type DefaulButtonProps = {
    icon: React.ReactNode,
    color?: 'green' | 'red',
} & React.ComponentProps<'button'>

export const DefaultButton = ({ icon, color = 'green', ...props }: DefaulButtonProps) => {
    return(
        <>   
            <button className={`${styles.button} ${styles[color]}`} {...props} >
                {icon}
            </button>
        </>
    )
}