import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom";
import './header.css'
import cl from './mobileBtn.module.css'
import logo from './../../img/logo.svg'
import IcoPhone from './../../img/header/tel.svg'
import MobileNav from "./MobileNav"
import HeaderNav from "./HeaderNav";

function HeaderComp() {
    const [navOpen, setNavOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const btnClasses = [cl.navIcon];
    if (navOpen) {
        btnClasses.push(cl.active)
    }

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <img src={logo} alt="Логотип" />
                </Link>
                <div className="header__menu menu">
                    <HeaderNav />
                </div>
                <div className="header__box">
                    <a href="tel:+79247999998" className="header__tel">
                        <span className="header__tel-ico"><img src={IcoPhone} alt="" /></span>
                        <span className="header__tel-txt">+7 (924) 799-99-98</span>
                    </a>
                    {isHomePage && (
                        <div className={cl.mobileNavBtn} onClick={() => navOpen ? setNavOpen(false) : setNavOpen(true)}>
                            <span className={btnClasses.join(' ')}></span>
                        </div>
                    )}
                </div>
            </div>
            <MobileNav visible={navOpen} setVisible={setNavOpen} />
        </header>
    )
};

export default HeaderComp;