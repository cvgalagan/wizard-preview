import React from "react"
import Spinner from "./Spinner"
import { render, screen } from "@testing-library/react"

describe("Spinner", () => {
    it("should render", () => {
        render(<Spinner />)
        expect(screen.getByRole("progressbar")).toBeInTheDocument()
    })
    it("should add 'indeterminate' modifier by default", () => {
        render(<Spinner />)
        const element = screen.getByRole("progressbar")
        expect(element.className.includes("spinner_indeterminate")).toBeTruthy()
    })
    it("should add 'static' modifier if variant is indeterminate", () => {
        render(<Spinner variant="indeterminate" />)
        const element = screen.getByRole("progressbar")
        expect(element.className.includes("spinner_indeterminate")).toBeTruthy()
    })
    it("should add 'static' modifier if variant is static", () => {
        render(<Spinner variant="static" />)
        const element = screen.getByRole("progressbar")
        expect(element.className.includes("spinner_static")).toBeTruthy()
    })
    it("should add 'disable-shrink' modifier if disableShrink is true", () => {
        render(<Spinner disableShrink />)
        const element = screen.getByRole("progressbar")
        expect(element.className.includes("spinner_disable-shrink")).toBeTruthy()
    })
})
