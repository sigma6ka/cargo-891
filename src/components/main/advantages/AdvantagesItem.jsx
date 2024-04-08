import React from "react";
import './advantagesItem.css';

function AdvatnagesItem({cardNumb, cardTitle}) {
    return (
        <div className="advantages__item">
            <div className="advantages__item-number">{cardNumb}</div>
            <div className="advantages__item-box">
                <div className="advantages__item-title">{cardTitle}</div>
            </div>
        </div>
    )
}

export default AdvatnagesItem;