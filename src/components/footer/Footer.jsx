import React from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import './footer.css'
import logo from './../../img/footer/logo.svg';
import wa from './../../img/wa-ico.svg'
import tg from './../../img/tg-ico.svg'
import weChat from './../../img/wecaht-ico.svg'
import FooterNav from "./FooterNav";

function Footer() {

    const history = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        if (location.pathname !== '/privacy-policy') {
            history('/privacy-policy');
        }

        window.scrollTo(0, 0);
    };

    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <Link to="/" className="footer__logo" onClick={handleClick}>
                        <img src={logo} alt="Логотип" />
                    </Link>
                    <nav className="footer__menu menu-footer">
                        <FooterNav />
                    </nav>
                    <div className="footer__socials">
                        <a href="https://u.wechat.com/EAnAjlV6wJjP9Cz8sGcjL5o" target="_blank" rel="noreferrer" className="footer__social"><img src={weChat} alt="WeChat" /></a>
                        <a href="https://t.me/cargo891" target="_blank" rel="noreferrer" className="footer__social"><img src={tg} alt="Telegram" /></a>
                        <a href="#!" className="footer__social"><img src={wa} alt="What's App" /></a>
                    </div>
                </div>
                <div className="footer__box">
                    <div className="footer__copy">@ 2023 · CARGO891</div>
                    <NavLink to="/privacy-policy" className="footer__privacy-policy" onClick={handleClick}>Политика конфиденциальности</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Footer;