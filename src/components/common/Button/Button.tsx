import React, { ButtonHTMLAttributes } from "react"
import styles from "./Button.module.scss"
import cn from "classnames"

type ButtonVariant = "primary" | "outline-primary" | "light" | "link"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
    children?: React.ReactNode
    testId?: string
}

const Button: React.FC<ButtonProps> = props => {
    const { children, variant = "primary", className, testId, ...buttonProps } = props

    const getVariant = () => {
        switch (variant) {
            case "primary":
                return styles.button_primary
            case "outline-primary":
                return styles.button_outlinePrimary
            case "link":
                return styles.button_link
            case "light":
                return styles.button_light
        }
    }

    return (
        <button {...buttonProps} className={cn(styles.button, getVariant(), className)} data-testid={testId}>
            {children}
        </button>
    )
}

export default Button
