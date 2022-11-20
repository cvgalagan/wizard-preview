import React from "react"
import { mount } from "enzyme"
import ErrorBoundary from "./ErrorBoundary"
import FullscreenError from "../FullscreenError/FullscreenError"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import { mockedTranslation } from "../../../utility/tests/mockedObjects"

const errorMessage = "Oops"

const ComponentWithError = () => {
    const throwError = () => {
        throw Error(errorMessage)
    }

    return <div id="never-shown">{throwError()}</div>
}

jest.mock("react-i18next", () => ({
    useTranslation: () => mockedTranslation
}))

describe("ErrorBoundary", () => {
    it("should show fullscreen error", () => {
        const wrapper = mount(
            <ErrorBoundary>
                <ComponentWithError />
            </ErrorBoundary>
        )
        expect(wrapper.find(FullscreenError).exists()).toBeTruthy()
        expect(wrapper.find(ErrorMessage).exists()).toBeFalsy()
    })
    it("should show local error", () => {
        const wrapper = mount(
            <ErrorBoundary local>
                <ComponentWithError />
            </ErrorBoundary>
        )
        expect(wrapper.find(FullscreenError).exists()).toBeFalsy()
        expect(wrapper.find(ErrorMessage).exists()).toBeTruthy()
    })
})
