import React from "react"
import * as yup from "yup"
import { CredentialsSignInForm } from "../../../types/CredentialsSignInForm"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import styles from "./LoginForm.module.scss"
import Control from "../../common/Control/Control"
import LoadingButton from "../../common/LoadingButton/LoadingButton"

const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required")
})

export interface LoginFormProps {
    onSubmit: (data: CredentialsSignInForm) => void
    testId?: string
}

const LoginForm: React.FC<LoginFormProps> = props => {
    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields }
    } = useForm<CredentialsSignInForm>({
        resolver: yupResolver(schema)
    })

    const onSubmitFactory = (data: CredentialsSignInForm) => {
        props.onSubmit(data)
    }

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmitFactory)} data-testid={props.testId}>
            <Control
                {...register("email")}
                id="email-input"
                isInvalid={touchedFields.email && !!errors.email}
                label="Email:"
                className={styles.loginForm__item}
                feedback={errors.email?.message}
            />
            <Control
                {...register("password")}
                autoComplete="off"
                id="password-input"
                type="password"
                isInvalid={touchedFields.password && !!errors.password}
                label="Password:"
                className={styles.loginForm__item}
                feedback={errors.password?.message}
            />
            <LoadingButton type="submit" className={styles.loginForm__item}>
                Submit
            </LoadingButton>
        </form>
    )
}

export default LoginForm
