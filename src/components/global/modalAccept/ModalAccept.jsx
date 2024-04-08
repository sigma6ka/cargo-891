import React, { useEffect } from "react";
import './modalAccept.css'
import ClossIco from './../../../img/cross.svg';
import IcoAccept from './../../../img/successfully.svg';

function ModalAccept({ active, setActive }) {

    const getBody = document.body;

    useEffect(() => {
        if (active) {
            getBody.classList.add('_lock');
        } else {
            getBody.classList.remove('_lock');
        }
    }, [active, getBody])

    return (
        <div className={active ? "modal _active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content _active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="modal__closs-ico" onClick={() => setActive(false)}><img src={ClossIco} alt="" /></div>
                <div className="modal__ico-accept"><img src={IcoAccept} alt="" /></div>
                <div className="modal__title">Спасибо, ваша заявка принята!</div>
                <div className="modal__text">Мы свяжемся с вами в ближайшее время</div>
                <button className="modal__close-modal" onClick={() => setActive(false)}>Закрыть окно</button>
            </div>
        </div>
    )
}

export default ModalAccept;