import React from "react";
import { Link } from 'react-scroll';
import { useLocation, } from "react-router-dom";

function FooterNav() {
    
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    if (!isHomePage) {
        return null;
    }

    return (
        <ul className="menu-footer__list">
            <li className="menu-footer__item"><Link to="prodCateg" smooth={true} duration={500} offset={-70} className="menu-footer__link">Ассортимент</Link></li>
            <li className="menu-footer__item"><Link to="stages" smooth={true} duration={500} offset={-70} className="menu-footer__link">Этапы работы</Link></li>
            <li className="menu-footer__item"><Link to="aboutUs" smooth={true} duration={500} offset={-70} className="menu-footer__link">О нас</Link></li>
            <li className="menu-footer__item"><Link to="faq" smooth={true} duration={500} offset={-70} className="menu-footer__link">Вопросы</Link></li>
        </ul>
    )
}

export default FooterNav;