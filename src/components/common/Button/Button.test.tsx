import Button from "./Button"
import { render, screen } from "@testing-library/react"

describe("Button", () => {
    it("should render with various variants", () => {
        render(<Button variant="primary" testId="primary" />)
        expect(screen.getByTestId("primary").className.includes("button_primary")).toBeTruthy()
        render(<Button variant="outline-primary" testId="outline-primary" />)
        expect(screen.getByTestId("outline-primary").className.includes("button_outlinePrimary")).toBeTruthy()
        render(<Button variant="link" testId="link" />)
        expect(screen.getByTestId("link").className.includes("button_link")).toBeTruthy()
        render(<Button variant="light" testId="light" />)
        expect(screen.getByTestId("light").className.includes("button_light")).toBeTruthy()
    })
    it("should render with children", () => {
        render(
            <Button testId="button">
                <div>testButton</div>
            </Button>
        )
        expect(screen.getByText("testButton")).toBeInTheDocument()
    })
})
