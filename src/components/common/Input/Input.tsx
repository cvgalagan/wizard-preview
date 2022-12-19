import React, { InputHTMLAttributes } from "react"
import styles from "./Input.module.scss"
import cn from "classnames"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isInvalid?: boolean
    className?: string
    testId?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const { isInvalid = false, children, className, testId, ...inputProps } = props

    return (
        <input
            {...inputProps}
            className={cn(styles.input, className, isInvalid && styles.input_invalid)}
            ref={ref}
            data-testid={testId}
        />
    )
})

export default Input
