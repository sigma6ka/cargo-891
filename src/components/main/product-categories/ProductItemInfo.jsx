import React, { useState } from "react";
import './productItemInfo.css';
import ProductImageDots from "./../../../img/product-categories/dots-ico.svg";
import ModalForm from "../../global/modalForm/ModalForm";

function ProductItemInfo() {
    const [isModalFormOpen, setIsModalFormOpen] = useState(false);

    const ModalFormOpen = () => {
        setIsModalFormOpen(true)
    }

    const ModalFormClose = () => {
        setIsModalFormOpen(false)
    }

    return (
        <div className="productCateg__item">
            <div className="productCateg__item-box">
                <div className="productCateg__item-title">Информация</div>
                <div className="productCateg__item-ico"><img src={ProductImageDots} alt="" /></div>
            </div>
            <div className="productCateg__item-desc">В случае если интересующий вас товар отсутствует в каталоге, просьба оставить заявку, наш сотрудник, свяжется с вами в ближайшее время</div>
            <button className="productCateg__item-consult-btn" onClick={ModalFormOpen}>Проконсультироваться</button>
            <ModalForm modalActive={isModalFormOpen} setModalActive={setIsModalFormOpen} onClose={ModalFormClose} />
        </div>
    )
}

export default ProductItemInfo;