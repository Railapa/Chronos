import styles from './DefaultInput.module.css'

type DefaulInputProps = {
    id: string,
    labelText?: string
} & React.ComponentProps<'input'>

export const DefaultInput = ({ type, id, labelText, ...rest }: DefaulInputProps) => {
    return(
        <>
            {labelText && <label htmlFor="input">{labelText}</label>}
            <input className={styles.input} id={id} type={type} {...rest} />
        </>
    )
}