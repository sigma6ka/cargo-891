import React, { useState } from "react";
import './feedback.css'
import FeedBackSocial from "../../local/feedback-social/FeedBackSocial";
import Dots from './../../../img/dots-ico.svg';
import QrTg from './../../../img/feedback/qr-tg.svg';
import QrWeChat from './../../../img/feedback/qr-codeWeChat.svg';
import QrWa from './../../../img/feedback/qr-codeWa.svg';
import Tg from './../../../img/tg-ico.svg';
import Wa from './../../../img/wa-ico.svg';
import WeChat from './../../../img/wecaht-ico.svg';
import ModalAccept from "../../global/modalAccept/ModalAccept";
import Loader from "../../global/loader/Loader";

function FeedBack() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            const onlyNumbers = value.replace(/[^\d]/g, '');
            setFormData({
                ...formData,
                [name]: onlyNumbers,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const validateForm = () => {
        const { first_name, last_name, phone } = formData;

        const isFirstNameValid = first_name.trim() !== '';
        const isLastNameValid = last_name.trim() !== '';
        const isPhoneNumberValid =
            phone.trim() !== '' && phone.length >= 1 && phone.length <= 16;

        return isFirstNameValid && isLastNameValid && isPhoneNumberValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitButtonDisabled(true);
        setIsLoading(true); // Показываем loader

        try {
            // console.log(formData)
            // Отправляем данные на сервер
            const response = await fetch('http://api.test-cargos.tw1.ru/api/v1/orders/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Обработка ответа от сервера
            if (response.ok) {
                // console.log('Данные успешно отправлены на сервер');
                setFormData({
                    first_name: '',
                    last_name: '',
                    phone: '',
                    email: '',
                });

                setIsSubmitButtonDisabled(false);
                setIsModalOpen(true);
            } else {
                // console.error('Ошибка при отправке данных на сервер');
            }
        } catch (error) {
            // console.error('Ошибка при отправке данных:', error);
        } finally {
            setIsLoading(false); // Скрываем loader после завершения запроса
        }
    };

    React.useEffect(() => {
        setIsFormValid(validateForm());
        // eslint-disable-next-line
    }, [formData]);

    return (
        <section className="page__feedback feedback">
            <div className="feedback__container">
                <h2 className="feedback__title _title-2"><span>Свяжитесь</span> с нами</h2>
                <div className="feedbakc__content">
                    {/* Form */}
                    <form action="" onSubmit={handleSubmit} className="feedbakc__form form-feedbakc">
                        <div className="form-feedbakc__title">
                            <div className="form-feedbakc__title-txt">Форма заполнения</div>
                            <div className="form-feedbakc__title-ico"><img src={Dots} alt="" /></div>
                        </div>
                        <div className="form-feedbakc__inputs">
                            <input
                                type="text"
                                maxLength="128"
                                minLength="1"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleInputChange}
                                className="form-feedbakc__input"
                                placeholder="Ваше имя"
                            />
                            <input
                                type="text"
                                maxLength="128"
                                minLength="1"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleInputChange}
                                className="form-feedbakc__input"
                                placeholder="Ваша фамилия"
                            />
                        </div>
                        <div className="form-feedbakc__inputs">
                            <input
                                type="tel"
                                minLength="1"
                                maxLength="16"
                                pattern="\d*"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="form-feedbakc__input"
                                placeholder="Ваш номер телефона"
                            />
                            <input
                                type="email"
                                maxLength="128"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="form-feedbakc__input"
                                placeholder="Ваша эл. почта (необязательно)"
                            />
                        </div>
                        <div className="form-feedbakc__box">
                            <button type="submit" disabled={!isFormValid || isLoading || isSubmitButtonDisabled} className="form-feedbakc__btn">{isLoading ? <Loader/> : 'Отправить заявку'}</button>
                            <div className="form-feedbakc__desc">Мы свяжемся с вами в ближайшее время для уточнения деталей и назначения консультации. Благодарим за обращение!</div>
                        </div>
                    </form>
                    <div className="feedbakc__socials">
                        <FeedBackSocial
                            socialIco={Tg}
                            altSocial={'Telegram'}
                            qrImg={QrTg}
                            altQr={'QR-code Telegram'}
                            itemTitle={'Отсканируйте QR-код'}
                            itemDesc={'и свяжитесь с нами в Telegram'}
                        />
                        <FeedBackSocial
                            socialIco={Wa}
                            altSocial={"What's App"}
                            qrImg={QrWa}
                            altQr={"QR-code What's App"}
                            itemTitle={'Отсканируйте QR-код'}
                            itemDesc={"и свяжитесь с нами в What's App"}
                        />
                        <FeedBackSocial
                            socialIco={WeChat}
                            altSocial={'WeChat'}
                            qrImg={QrWeChat}
                            altQr={'QR-code WeChat'}
                            itemTitle={'Отсканируйте QR-код'}
                            itemDesc={'и свяжитесь с нами в WeChat'}
                        />
                    </div>
                </div>
            </div>
            <ModalAccept active={isModalOpen} setActive={setIsModalOpen}/>
        </section>
    )
}

export default FeedBack;