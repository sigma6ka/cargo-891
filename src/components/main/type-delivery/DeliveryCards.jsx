import React from "react";
import './deliveryCards.css'

function DeliveryCards({itemNumb, itemTitle, itemInterval}) {
    return (
        <div className="deliveryCard__item">
            <div className="deliveryCard__item-number">{itemNumb}</div>
            <div className="deliveryCard__item-box">
                <div className="deliveryCard__item-title">{itemTitle}</div>
                <div className="deliveryCard__item-interval">{itemInterval}</div>
            </div>
        </div>
    )
}

export default DeliveryCards;