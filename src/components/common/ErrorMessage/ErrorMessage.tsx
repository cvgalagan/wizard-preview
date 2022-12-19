import React from "react"
import styles from "./ErrorMessage.module.scss"

interface Props {
    text: string
    testId?: string
}

const ErrorMessage: React.FC<Props> = props => {
    return (
        <div className={styles.errorMessage} data-testid={props.testId}>
            {props.text}
        </div>
    )
}

export default ErrorMessage
