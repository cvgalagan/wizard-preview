import React from "react"
import { logError } from "../../../utility/common/logError"
import FullscreenError from "../FullscreenError/FullscreenError"
import ErrorMessage from "../ErrorMessage/ErrorMessage"

const defaultError = "Error occurred"

interface Props {
    local?: boolean
    children: React.ReactNode
    testId?: string
}

interface State {
    hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(): State {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        logError(error, "Catch error", errorInfo)
    }

    render(): React.ReactNode {
        if (this.state.hasError) {
            if (this.props.local) {
                return <ErrorMessage text={defaultError} testId={this.props.testId} />
            }
            return <FullscreenError message={defaultError} testId={this.props.testId} />
        }
        return this.props.children
    }
}

export default ErrorBoundary
