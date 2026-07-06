import styles from './Heading.module.css'

type HeadingProps = {
    children: React.ReactNode;
}

export const Heading = (props: HeadingProps) => {
    return(
        <div>
            <h1 className={styles.heading}>
                {props.children}
            </h1>
        </div>
    )
}