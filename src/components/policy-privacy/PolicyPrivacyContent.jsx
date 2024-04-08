import React from "react";
import "./PolicyPrivacyContent.css"
import policyPrivacyDate from './policyPrivacyDate';
import { Link } from "react-router-dom";

const CustomLink = ({ to, children }) => {
    const isEmail = typeof to === 'string' && to.includes('@');

    if (isEmail) {
        return (
            <a href={`mailto:${to}`} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        );
    } else {
        // Если to не является URL-адресом, устанавливаем '/'
        const linkTo = typeof to === 'string' && to.startsWith('http') ? '/' : to;
        return <Link to={linkTo}>{children}</Link>;
    }
};

function PolicyPrivacyContent() {
    return (
        <div className="privacy-policy__container">
            <h1 className="privacy-policy__title _title-2">Политика в отношении обработки <span>персональных данных</span></h1>
            <div className="privacy-policy__items">
                {policyPrivacyDate.map(item => (
                    <div key={item.id} className="privacy-policy__item">
                        <div className="privacy-policy__item-title">{item.title}</div>
                        {item.content.map(content => (
                            <div key={content.id} className="privacy-policy__item-lists">
                                {content && (
                                    <div key={`text-${content.id}`} className="privacy-policy__item-lists-box">
                                        <div key={`text-content-${content.id}`} className="privacy-policy__item-text">{content.text}</div>
                                        {content.list.map(itemsList => (
                                            <div key={itemsList.id} className="privacy-policy__item-list">
                                                {itemsList.textList.trim() !== '' && (
                                                    <div key={`list-${itemsList.id}`} className="privacy-policy__item-list-text">
                                                        {itemsList.textList}
                                                        {itemsList.link.trim() !== '' && (
                                                            <CustomLink key={`link-${itemsList.id}`} to={itemsList.link}>{itemsList.link}</CustomLink>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PolicyPrivacyContent;