import React from "react"
import FullscreenError from "./FullscreenError"
import { shallow } from "enzyme"
import { mockedTranslation } from "../../../utility/tests/mockedObjects"

jest.mock("react-i18next", () => ({
    useTranslation: () => mockedTranslation
}))

const props = {
    title: "Test title",
    message: "Test message"
}

describe("FullscreenError", () => {
    it("should render", () => {
        const wrapper = shallow(<FullscreenError {...props} />)
        expect(wrapper).toMatchSnapshot()
    })
    it("should render with title and message", () => {
        const wrapper = shallow(<FullscreenError {...props} />)
        expect(wrapper.find(".fullscreenError__title").text()).toBe(props.title)
        expect(wrapper.find(".fullscreenError__message").text()).toBe(props.message)
    })
    it("should render without title and message", () => {
        shallow(<FullscreenError />)
    })
})
