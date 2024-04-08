import React, { useState } from "react";
import './itemConsultation.css'
import ModalForm from "../global/modalForm/ModalForm";

function ItemConsultation() {
    const [isModalFormOpen, setIsModalFormOpen] = useState(false);

    const ModalFormOpen = () => {
        setIsModalFormOpen(true)
    }

    const ModalFormClose = () => {
        setIsModalFormOpen(false)
    }

    return (
        <div className="itemConslutation__item">
            <div className="itemConslutation__item-desc">Желаете получить профессиональную консультацию? Нажмите кнопку "Проконсультироваться" прямо сейчас и наши специалисты свяжутся с вами в ближайшее время!</div>
            <button className="itemConslutation__item-btn" onClick={ModalFormOpen}>Проконсультироваться</button>
            <ModalForm modalActive={isModalFormOpen} setModalActive={setIsModalFormOpen} onClose={ModalFormClose}/>
        </div>
    )
}

export default ItemConsultation;