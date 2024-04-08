import React from "react";
import './typeDelivery.css'
import DeliveryCards from "./DeliveryCards";
import ItemConsultation from "../../local/ItemConsultation";

function TypeDelivery() {

    return (
        <section className="page__typeDelivery typeDelivery">
            <div className="typeDelivery__container">
                <h2 className="typeDelivery__title _title-2">Доставим <span>быстро и удобно</span></h2>
                <div className="typeDelivery__items">
                    <DeliveryCards itemNumb={'01'} itemTitle={'Авиа доставка'} itemInterval={'6-10 дней'} />
                    <DeliveryCards itemNumb={'02'} itemTitle={'Быстрое авто'} itemInterval={'10-15 дней'} />
                    <DeliveryCards itemNumb={'03'} itemTitle={'Авто доставка'} itemInterval={'13-25 дней'} />
                    <DeliveryCards itemNumb={'04'} itemTitle={'Контейнер'} itemInterval={'25-30 дней'} />
                    <ItemConsultation/>
                </div>
            </div>
        </section>
    )
}

export default TypeDelivery;