import React from "react";
import './FeedBackSocial.css';

function FeedBackSocial({socialIco, qrImg, itemTitle, itemDesc, altSocial, altQr}) {
    return (
        <div className="feedbakc__social">
            <div className="feedbakc__social-ico"><img src={socialIco} alt={altSocial} /></div>
            <div className="feedbakc__social-item">
                <div className="feedbakc__social-item-qr"><img src={qrImg} alt={altQr} /></div>
                <div className="feedbakc__social-item-box">
                    <div className="feedbakc__social-item-title">{itemTitle}</div>
                    <div className="feedbakc__social-item-desc">{itemDesc}</div>
                </div>
            </div>
        </div>
    )
}

export default FeedBackSocial;