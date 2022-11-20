import React from "react"
import styles from "./Input.module.scss"
import cn from "classnames"

export interface InputProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
    type?: string
    value?: string
    isInvalid?: boolean
    disabled?: boolean
    className?: string
    autoComplete?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { isInvalid = false, disabled = false, type = "text", children, className, ...inputProps } = props

    return (
        <input
            {...inputProps}
            className={cn(styles.input, className, isInvalid && styles.input_invalid)}
            ref={ref}
            disabled={disabled}
            type={type}
        />
    )
})

export default Input
