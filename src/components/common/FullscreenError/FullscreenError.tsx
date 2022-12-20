import React from "react"
import styles from "./FullscreenError.module.scss"
import PublicPage from "../PublicPage/PublicPage"
import logo from "../../../logo.svg"

export interface FullscreenErrorProps {
    title?: string
    message?: string
    testId?: string
}

const FullscreenError: React.FC<FullscreenErrorProps> = props => {
    const { title, message, testId } = props
    return (
        <PublicPage className={styles.fullscreenError} contentInCenter testId={testId}>
            <div className={styles.fullscreenError__content}>
                <h1 className={styles.fullscreenError__title}>{title}</h1>
                {message && <p className={styles.fullscreenError__message}>{message}</p>}
                <div className={styles.fullscreenError__image}>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
        </PublicPage>
    )
}

export default FullscreenError
