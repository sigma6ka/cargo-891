import React from "react";
import aboutUsData from './aboutUsEl';
import './aboutUs.css';
import aboutImg from './../../../img/about/about-img.jpg'
import Benefits from "../../local/Benefits";

function AboutUs() {
    return (
        <section id="aboutUs" className="page__about-us about-us">
            <div className="about-us__container">
                <h2 className="about-us__title _title-2">Расскажем несколько слов <span>о себе</span></h2>
                <div className="about-us__content">
                    <div className="about-us__image _ibg"><img src={aboutImg} alt="" /></div>
                    <div className="about-us__text-content">
                        <div className="about-us__text-content-title">Мы на рынке уже <span>более 10 лет</span></div>
                        <div className="about-us__text-content-texts">
                            {aboutUsData.map((text) =>
                                <div key={text.id} className="about__text-content-text">{text.description}</div>
                            )}
                        </div>
                    </div>
                </div>
                <Benefits/>
            </div>
        </section>
    )
}

export default AboutUs;