import React from "react"
import "./App.scss"
import ErrorBoundary from "./components/common/ErrorBoundary/ErrorBoundary"
import LoginForm from "./components/login/LoginForm/LoginForm"

function App() {
    return (
        <ErrorBoundary>
            <div className="App">
                <header className="App-header">
                    <LoginForm onSubmit={data => console.log("SUBMIT", data)} testId="login-form" />
                </header>
            </div>
        </ErrorBoundary>
    )
}

export default App
