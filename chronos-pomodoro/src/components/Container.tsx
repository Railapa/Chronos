import styles from './Container.module.css'

type ContainerProps = {
    children: React.ReactNode
}

export const Container = ({ Children }: ContainerProps) => {
    return(
         <div className={styles.container}>
            <div className={styles.content}>
                {Children}
            </div>
        </div>
    )
}