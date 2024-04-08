import React from "react";
import { Link } from 'react-scroll';
import { useLocation } from 'react-router-dom';

function HeaderNav() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    if (!isHomePage) {
        return null;
    }

    return (
        <ul className="menu__list">
            <li className="menu__item"><Link to="prodCateg" smooth={true} duration={500} offset={-100} className="menu__link">Ассортимент</Link></li>
            <li className="menu__item"><Link to="stages" smooth={true} duration={500} offset={-100} className="menu__link">Этапы работы</Link></li>
            <li className="menu__item"><Link to="aboutUs" smooth={true} duration={500} offset={-100} className="menu__link">О нас</Link></li>
            <li className="menu__item"><Link to="faq" smooth={true} duration={500} offset={-100} className="menu__link">Вопросы</Link></li>
        </ul>
    )
}

export default HeaderNav;