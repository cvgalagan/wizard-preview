import React from "react"
import FullscreenError from "./FullscreenError"
import { render, screen } from "@testing-library/react"

const testId = "fullscreenError"

const props = {
    title: "Test title",
    message: "Test message"
}

describe("FullscreenError", () => {
    it("should render", () => {
        render(<FullscreenError {...props} testId={testId} />)
        expect(screen.getByTestId(testId)).toBeInTheDocument()
        expect(screen.getByText(props.title)).toBeInTheDocument()
        expect(screen.getByText(props.message)).toBeInTheDocument()
    })
    it("should render without title and message", () => {
        render(<FullscreenError testId={testId} />)
        expect(screen.getByTestId(testId)).toBeInTheDocument()
        expect(screen.queryAllByText(props.title)).toEqual([])
        expect(screen.queryAllByText(props.message)).toEqual([])
    })
})
