import React from "react"
import { render, screen } from "@testing-library/react"
import Control from "./Control"

const id = "control"
const label = "Control label"
const placeholder = "Enter value..."
const feedback = "Some validation error"

describe("Control", () => {
    it("should render", () => {
        render(<Control id={id} label={label} testId={id} placeholder={placeholder} />)
        const controlElement = screen.getByTestId(id)
        expect(controlElement).toBeInTheDocument()
        expect(screen.getByText(label)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument()
    })
    it("should render with feedback", () => {
        render(<Control id={id} label={label} feedback={feedback} />)
        expect(screen.getByText(feedback)).toBeInTheDocument()
    })
})
