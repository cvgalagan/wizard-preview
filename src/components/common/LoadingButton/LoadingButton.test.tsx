import React from "react"
import LoadingButton from "./LoadingButton"
import { render, screen } from "@testing-library/react"

describe("LoadingButton", () => {
    it("should render in loading state", () => {
        render(
            <LoadingButton loading variant="primary" testId="loadingButton">
                Test button
            </LoadingButton>
        )
        const loadingButtonElement = screen.getByTestId("loadingButton")
        expect(loadingButtonElement).toBeInTheDocument()
        expect(screen.getByRole("progressbar")).toBeInTheDocument()
        expect(loadingButtonElement.attributes.getNamedItem("disabled")).toBeTruthy()
    })
})
