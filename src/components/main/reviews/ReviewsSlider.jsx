import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from 'axios';
import './reviewsSlider.css';
import { useEffect, useState } from 'react';
import { Pagination, Navigation } from 'swiper/modules'
import ArrowPrev from './../../../img/reviews/arrow-prev.svg';
import ArrowNext from './../../../img/reviews/arrow-next.svg';

const ReviewsSlider = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://api.test-cargos.tw1.ru/api/v1/feedbacks/');
                setReviews(response.data);
            } catch (error) {
                console.error('Ошибка при получении отзывов:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="reviews-slider__container">
            <h2 className="reviews-slider__title _title-2"><span>О нас</span> говорят клиенты</h2>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                navigation={{
                    nextEl: '.reviews-slider__button-next',
                    prevEl: '.reviews-slider__button-prev',
                    clickable: true,
                }}
                pagination={{
                    clickable: true,
                    el: '.reviews-slider__pagination',
                    // bulletClass: 'swiper-pagination-bullet-custom',
                    dynamicBullets: true,
                    dynamicMainBullets: 4,
                }}
                modules={[Pagination, Navigation]}
                breakpoints={{
                    1025: {
                        slidesPerView: 2,
                    },
                    375: {
                        slidesPerView: 1,
                    },
                }}
            >
                <div className="reviews-slider__items">
                    {reviews.map((review, index) => (
                        <SwiperSlide key={review.id}>
                            <div className="reviews-slider__item">
                                <div className="reviews-slider__item-content">
                                    <h3 className='reviews-slider__item-title'>{review.title}</h3>
                                    <p className="reviews-slider__item-text">{review.description}</p>
                                </div>
                                <div className="reviews-slider__item-box">
                                    <img
                                        src={review.photo}
                                        alt={`Фотография ${review.name}`}
                                        className="reviews-slider__item-image"
                                    />
                                    <p className="reviews-slider__item-author">
                                        {review.name}
                                    </p>
                                </div>
                                <p className="reviews-slider__item-number">
                                    {(index + 1).toString().padStart(2, '0')}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
                <div className="reviews-slider__controler">
                    <div className="reviews-slider__button-prev"><img src={ArrowPrev} alt="" /></div>
                    <div className="reviews-slider__pagination-box">
                        <div className="reviews-slider__pagination"></div>
                    </div>
                    <div className="reviews-slider__button-next"><img src={ArrowNext} alt="" /></div>
                </div>
            </Swiper>
        </div>
    );
};

export default ReviewsSlider;
