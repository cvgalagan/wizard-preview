import React from "react"
import { shallow } from "enzyme"
import PublicPage from "./PublicPage"

const testChildren = <div className="test-class">test children</div>
const testHidingParams = [
    { name: "hideLogo", element: ".header__left" },
    { name: "hideLanguageSelector", element: ".header__right" }
]
const testText = "test text"

describe("PublicPage", () => {
    it("should render", () => {
        const wrapper = shallow(<PublicPage>test</PublicPage>)
        expect(wrapper).toMatchSnapshot()
    })
    it("should have content in center", () => {
        const wrapper = shallow(<PublicPage contentInCenter>test</PublicPage>)
        expect(wrapper.hasClass("public-page_centered")).toBeTruthy()
    })
    it("should have children in a body", () => {
        const wrapper = shallow(<PublicPage>{testChildren}</PublicPage>)
        expect(wrapper.find(".public-page__body").contains(testChildren)).toBeTruthy()
    })
    testHidingParams.forEach(p => {
        const params = { [p.name]: true }
        it(`should hide ${p.element} element on ${p.name} param`, () => {
            const wrapper = shallow(<PublicPage {...params}>test</PublicPage>)
            expect(wrapper.find(p.element).children()).toHaveLength(0)
        })
    })
})

describe("PublicPage.Message", () => {
    it("should render", () => {
        const wrapper = shallow(<PublicPage.Message text={testText}>test</PublicPage.Message>)
        expect(wrapper).toMatchSnapshot()
    })
    it("should show title", () => {
        const wrapper = shallow(
            <PublicPage.Message text={testText} title="Test title">
                test
            </PublicPage.Message>
        )
        expect(wrapper.exists(".public-page-message__title")).toBeTruthy()
    })
    it("should have children in image container", () => {
        const wrapper = shallow(<PublicPage.Message text={testText}>{testChildren}</PublicPage.Message>)
        expect(wrapper.find(".public-page-message__image").contains(testChildren)).toBeTruthy()
    })
})
