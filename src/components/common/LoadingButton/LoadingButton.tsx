import React from "react"
import styles from "./LoadingButton.module.scss"
import Button, { ButtonProps } from "../Button/Button"
import Spinner from "../Spinner/Spinner"
import cn from "classnames"

export interface LoadingButtonProps extends ButtonProps {
    loading?: boolean
}

const LoadingButton: React.FC<LoadingButtonProps> = props => {
    const { loading = false, children, className, variant = "primary", ...buttonProps } = props
    return (
        <Button
            {...buttonProps}
            className={cn(styles.loadingButton, loading && styles.loadingButton_isLoading, className)}
            disabled={loading ? true : buttonProps.disabled}
            variant={variant}
        >
            <div className={styles.loadingButton__content}>{children}</div>
            <div className={styles.loadingButton__spinnerContainer}>
                <Spinner
                    className={cn(
                        styles.loadingButton__spinner,
                        variant === "light" || variant === "link" || variant?.startsWith("outline-")
                            ? styles.loadingButton__spinner_dark
                            : undefined
                    )}
                />
            </div>
        </Button>
    )
}

export default LoadingButton
