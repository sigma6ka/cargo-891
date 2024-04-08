import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules'

import './productCateg.css'
import ProductImageArrow from "./../../../img/product-categories/arrow-up-right.svg";
import arrowPrev from "./../../../img/product-categories/arrow-prev.svg";
import arrowNext from "./../../../img/product-categories/arrow-next.svg";
import CloseIco from "./../../../img/product-categories/cross.svg";
import ProductItemInfo from "./ProductItemInfo";
import sliderProductData from './sliderProductData';
import { useEffect, useState } from 'react';

function ProductCateg() {

    const [openSlider, setOpenSlider] = useState(false);

    const ModalSliderOpen = (item) => {
        setOpenSlider(item);
    }

    useEffect(() => {
        if (openSlider) {
            document.body.classList.add('_lock');
        } else {
            document.body.classList.remove('_lock');
        }
    })

    return (
        <section id='prodCateg' className="page__productCateg productCateg">
            <div className="productCateg__container">
                <h2 className="productCateg__title _title-2">Предлагаем следующие <span>категории товаров</span></h2>
                <div className="productCateg__items">
                    {sliderProductData.map((item) =>
                        <div key={item.id} className="productCateg__item">
                            <div className="productCateg__item-img _ibg"><img src={item.src} alt={item.title} /></div>
                            <div className="productCateg__item-btn" onClick={() => ModalSliderOpen(item)}>
                                <div className="productCateg__item-btn-text">{item.title}</div>
                                <div className="productCateg__item-btn-ico"><img src={ProductImageArrow} alt="" /></div>
                            </div>
                        </div>
                    )}
                    <div className={openSlider ? "prodModal _active" : "prodModal"} onClick={() => setOpenSlider(false)}>
                        <div className="prodModal__close-ico"><img src={CloseIco} alt="" /></div>
                        <div className={openSlider ? "prodModal__content _active" : "prodModal__content"} onClick={e => e.stopPropagation()}>
                            {openSlider && (
                                <Swiper
                                    slidesPerView={1}
                                    modules={[Pagination, Navigation]}
                                    navigation={{
                                        nextEl: ".prodModal__button-next",
                                        prevEl: ".prodModal__button-prev",
                                        clickable: true,
                                    }}
                                    pagination={{
                                        clickable: true,
                                        el: '.prodModal__pagination',
                                        dynamicBullets: true,
                                        dynamicMainBullets: 4,
                                    }}
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    {openSlider.slideImages.map((elem) => (
                                        <SwiperSlide key={elem.id}>
                                            <div className="prodModal__item">
                                                <div className="prodModal__image _ibg"><img src={elem.img} alt="" /></div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                    <div className="prodModal__controler">
                                        <div className="prodModal__button-prev"><img src={arrowPrev} alt="" /></div>
                                        <div className="prodModal__pagination-box">
                                            <div className="prodModal__pagination"></div>
                                        </div>
                                        <div className="prodModal__button-next"><img src={arrowNext} alt="" /></div>
                                    </div>
                                </Swiper>
                            )}
                        </div>
                    </div>
                    <ProductItemInfo />
                </div>
            </div>
        </section>
    )
}

export default ProductCateg;