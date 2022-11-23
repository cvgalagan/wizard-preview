import React, { ButtonHTMLAttributes } from "react"
import styles from "./Button.module.scss"
import cn from "classnames"

type ButtonType = "submit" | "button" | "reset"
type ButtonVariant = "primary" | "outline-primary" | "light" | "link"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: ButtonType
    variant?: ButtonVariant
    children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = props => {
    const { children, variant = "primary", className, ...buttonProps } = props

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
        <button {...buttonProps} className={cn(styles.button, getVariant(), className)}>
            {children}
        </button>
    )
}

export default Button
