import React, { useEffect, useState } from "react";
import './main-block.css';
import MainImage from './../../../img/main-block/main-block-img.jpg';
import advantImageDark from './../../../img/main-block/badge-check-dark.svg';
import advantImageLight from './../../../img/main-block/badge-check-light.svg';
import WeChat from './../../../img/wecaht-ico.svg';
import Tg from './../../../img/tg-ico.svg';
import Wa from './../../../img/wa-ico.svg';
import DynamicAdapt from "../../global/DynamicAdaptiv/DynamicAdapt";
import ModalForm from "../../global/modalForm/ModalForm";

function MainBlock() {
    const [isModalFormOpen, setIsModalFormOpen] = useState(false);

    const ModalFormOpen = () => {
        setIsModalFormOpen(true)
    }

    const ModalFormClose = () => {
        setIsModalFormOpen(false)
    }

    useEffect(() => {
        const da = new DynamicAdapt('max');
        da.init();
    }, []);

    return (
        <section className="page__main-block main-block">
            <div className="main-block__container">
                <div className="main-block__text-content">
                    <h1 className="main-block__title">Безопасные <br /> и надежные перевозки товаров <br /> из Китая</h1>
                    <div className="main-block__advantages">
                        <div className="main-block__advantages-box">
                            <div className="main-block__desc" data-da=".main-block__text-content,699,1">Подберем и доставим понравившийся товар в любой регион России на выгодных условиях</div>
                            <div className="main-block__advantage-box">
                                <div className="main-block__advantage">
                                    <div className="main-block__advantage-ico"><img src={advantImageDark} alt="" /></div>
                                    <div className="main-block__advantage-text">Без наценок и переплат</div>
                                </div>
                                <div className="main-block__advantage">
                                    <div className="main-block__advantage-ico"><img src={advantImageLight} alt="" /></div>
                                    <div className="main-block__advantage-text">Быстрая доставка</div>
                                </div>
                                <div className="main-block__advantage">
                                    <div className="main-block__advantage-ico"><img src={advantImageLight} alt="" /></div>
                                    <div className="main-block__advantage-text">Напрямую с завода-изготовителя</div>
                                </div>
                                <div className="main-block__advantage">
                                    <div className="main-block__advantage-ico"><img src={advantImageLight} alt="" /></div>
                                    <div className="main-block__advantage-text">Представители в России и Китае</div>
                                </div>
                            </div>
                            <div className="main-block__socials" data-da=".main-block__text-content,699,last">
                                <div className="main-block__social"><a href="https://u.wechat.com/EC9QKQj3XoP_OEVNYYoNlJM" target="_blank" rel="noreferrer" className="main-block__social-link"><img src={WeChat} alt="" /></a></div>
                                <div className="main-block__social"><a href="https://t.me/cargo891" target="_blank" rel="noreferrer" className="main-block__social-link"><img src={Tg} alt="" /></a></div>
                                <div className="main-block__social"><a href="https://wa.me/qr/I7QYEIWLZN35C1" target="_blank" rel="noreferrer" className="main-block__social-link"><img src={Wa} alt="" /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-block__box" data-da=".main-block__advantages,828,2">
                    <div className="main-block__image _ibg"><img src={MainImage} alt="" /></div>
                    <button className="main-block__btn" onClick={ModalFormOpen}>
                        <span className="main-block__btn-text">Получить консультацию</span>
                        <span className="main-block__btn-rings"></span>
                        <span className="main-block__btn-rings"></span>
                    </button>
                </div>
            </div>
            <ModalForm modalActive={isModalFormOpen} setModalActive={setIsModalFormOpen} onClose={ModalFormClose}/>
        </section>
    )
}

export default MainBlock;