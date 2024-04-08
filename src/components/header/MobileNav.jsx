import React from "react";
import cl from './mobileNav.module.css';
import { Link } from 'react-scroll';

function MobileNav({ visible, setVisible }) {
    const rootClasses = [cl.mobileNav];

    if (visible) {
        rootClasses.push(cl.open);
    }

    const handleNavLinkClick = () => {
        // Скрыть мобильную навигацию при клике на элемент навигации
        setVisible(false);
    };

    return (
        <div className={rootClasses.join(' ')}>
            <ul className={cl.mobileNav__list}>
                <li>
                    <Link
                        to="prodCateg"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        onClick={handleNavLinkClick}
                    >
                        Ассортимент
                    </Link>
                </li>
                <li>
                    <Link
                        to="stages"
                        smooth={true}
                        duration={500}
                        offset={-50}
                        onClick={handleNavLinkClick}
                    >
                        Этапы работы
                    </Link>
                </li>
                <li>
                    <Link
                        to="aboutUs" // Замените на идентификатор вашего третьего раздела
                        smooth={true}
                        duration={500}
                        offset={-50}
                        onClick={handleNavLinkClick}
                    >
                        О нас
                    </Link>
                </li>
                <li>
                    <Link
                        to="№!" // Замените на идентификатор вашего четвертого раздела
                        smooth={true}
                        duration={500}
                        offset={-50}
                        onClick={handleNavLinkClick}
                    >
                        Вопросы
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default MobileNav;