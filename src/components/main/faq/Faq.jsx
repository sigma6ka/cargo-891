import React from "react";
import './faq.css';
import faqData from './faqData';
import Accordion from "../../local/accordion/Accrodion";

function Faq() {

    return (
        <section id="faq" className="page__faq faq">
            <div className="faq__container">
                <h2 className="faq__title _title-2">Клиенты <span>часто спрашивают</span></h2>
                <Accordion data={faqData}/>
            </div>
        </section>
    )
}

export default Faq;