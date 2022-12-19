import React from "react"
import PublicPage from "./PublicPage"
import { render, screen } from "@testing-library/react"

const testChildren = <div className="test-class">test children</div>
const testText = "test text"

describe("PublicPage", () => {
    it("should render", () => {
        render(<PublicPage testId="public">test</PublicPage>)
        expect(screen.getByTestId("public")).toBeInTheDocument()
    })
    it("should have content in center", () => {
        render(
            <PublicPage contentInCenter testId="public">
                test
            </PublicPage>
        )
        expect(screen.getByTestId("public").className.includes("public-page_centered")).toBeTruthy()
    })
    it("should have children in a body", () => {
        render(<PublicPage testId="public">{testChildren}</PublicPage>)
        const element = screen.getByTestId("public")
        expect(element.getElementsByClassName("test-class")).toHaveLength(1)
    })
})

describe("PublicPage.Message", () => {
    it("should render", () => {
        render(
            <PublicPage.Message text={testText} testId="public">
                test
            </PublicPage.Message>
        )
        expect(screen.getByTestId("public")).toBeInTheDocument()
    })
    it("should show title", () => {
        render(
            <PublicPage.Message text={testText} title="Test title" testId="public">
                test
            </PublicPage.Message>
        )
        expect(screen.getByText("Test title")).toBeInTheDocument()
    })
    it("should have children in image container", () => {
        render(
            <PublicPage.Message text={testText} testId="public">
                {testChildren}
            </PublicPage.Message>
        )
        const element = screen.getByTestId("public")
        expect(element.getElementsByClassName("test-class")).toHaveLength(1)
    })
})
