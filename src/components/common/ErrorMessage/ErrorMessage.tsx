import React from "react"
import styles from "./ErrorMessage.module.scss"

interface Props {
    text: string
}

const ErrorMessage: React.FC<Props> = props => {
    return <div className={styles.errorMessage}>{props.text}</div>
}

export default ErrorMessage
