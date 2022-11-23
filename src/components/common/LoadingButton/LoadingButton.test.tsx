import React from "react"
import { shallow } from "enzyme"
import LoadingButton from "./LoadingButton"

describe("LoadingButton", () => {
    it("should render in loading state", () => {
        const wrapper = shallow(
            <LoadingButton loading variant="primary">
                Test button
            </LoadingButton>
        )
        expect(wrapper.prop("disabled")).toBeTruthy()
        expect(wrapper).toMatchSnapshot()
    })
})
