import React from "react"
import Input, { InputProps } from "../Input/Input"
import styles from "./Control.module.scss"
import cn from "classnames"

export interface ControlProps extends InputProps {
    id: string
    label: string
    className?: string
    feedback?: string
}

const Control = React.forwardRef<HTMLInputElement, ControlProps>((props, ref) => {
    const { label, id, className, feedback, ...inputProps } = props

    return (
        <div className={cn(styles.control, className)}>
            <label htmlFor={id} className={styles.control__label}>
                {label}
            </label>
            <Input {...inputProps} id={id} ref={ref} />
            <div className={styles.control__feedback}>{feedback}</div>
        </div>
    )
})

export default Control
