import React from "react"
import ErrorBoundary from "./ErrorBoundary"
import { render, screen } from "@testing-library/react"

const errorMessage = "Oops"

const ComponentWithError = () => {
    const throwError = () => {
        throw Error(errorMessage)
    }

    return <div id="never-shown">{throwError()}</div>
}

describe("ErrorBoundary", () => {
    it("should show fullscreen error", () => {
        render(
            <ErrorBoundary testId="error">
                <ComponentWithError />
            </ErrorBoundary>
        )
        expect(screen.getByTestId("error").className.includes("errorMessage")).toBeFalsy()
        expect(screen.getByTestId("error").className.includes("fullscreenError")).toBeTruthy()
    })
    it("should show local error", () => {
        render(
            <ErrorBoundary local testId="error">
                <ComponentWithError />
            </ErrorBoundary>
        )
        expect(screen.getByTestId("error").className.includes("errorMessage")).toBeTruthy()
        expect(screen.getByTestId("error").className.includes("fullscreenError")).toBeFalsy()
    })
})
