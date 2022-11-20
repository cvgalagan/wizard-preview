import React from "react"
import "./PublicPage.scss"
import { ClassProps } from "../../../utility/common/classProps"
import cn from "classnames"

export interface MessageProps extends ClassProps {
    title?: string
    text: string
    children: React.ReactNode
}

type IPublicPage<P> = React.FC<P> & {
    Message: typeof Message
}

const Message: React.FC<MessageProps> = props => {
    const { title, text, children, className } = props
    return (
        <div className={cn("public-page-message", className)}>
            {title && <h1 className="public-page-message__title">{title}</h1>}
            <p className="public-page-message__text">{text}</p>
            <div className="public-page-message__image">{children}</div>
        </div>
    )
}

export interface PublicPageProps extends ClassProps {
    hideLanguageSelector?: boolean
    hidePrivacyPolicy?: boolean
    hideTermOfUse?: boolean
    contentInCenter?: boolean
    children: React.ReactNode
}

const PublicPage: IPublicPage<PublicPageProps> = props => {
    const { className, children, contentInCenter } = props

    return (
        <div className={cn("public-page", className, contentInCenter && "public-page_centered")}>
            <div className="public-page__header header" />
            <div className="public-page__body">{children}</div>
            <div className="public-page__footer footer">
                <div className="footer__left" />
                <div className="footer__right" />
            </div>
        </div>
    )
}

PublicPage.Message = Message

export default PublicPage
