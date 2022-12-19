import React from "react"
import ErrorMessage from "./ErrorMessage"
import { render, screen } from "@testing-library/react"

describe("ErrorMessage", () => {
    it("should render", () => {
        render(<ErrorMessage text="test" />)
        expect(screen.getByText("test")).toBeInTheDocument()
    })
})
