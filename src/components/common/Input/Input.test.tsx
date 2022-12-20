import React from "react"
import { render, screen } from "@testing-library/react"
import Input from "./Input"

describe("Input", () => {
    it("should render", () => {
        render(<Input testId="main" />)
        expect(screen.getByTestId("main")).toBeInTheDocument()
    })
    it("should render in invalid state", () => {
        render(<Input isInvalid testId="invalid" />)
        expect(screen.getByTestId("invalid").className.includes("input_invalid")).toBeTruthy()
    })
})
