import React, { useEffect, useState } from 'react';
import './modalForm.css'
import ClossIco from './../../../img/cross.svg';
import Loader from "../loader/Loader";
import ModalAccept from '../modalAccept/ModalAccept';

const ModalForm = ({ modalActive, setModalActive, onClose }) => {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);

    React.useEffect(() => {
        setIsFormValid(validateForm());
        // eslint-disable-next-line
    }, [formData]);

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

    const handleClose = () => {
        // Сбрасываем данные формы
        setFormData({
            first_name: '',
            last_name: '',
            phone: '',
        });

        // Закрываем модальное окно
        onClose();
        setIsSubmitButtonDisabled(false);
        setModalActive(false);
        document.body.classList.remove('_lock');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm() || isSubmitButtonDisabled) {
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
                });

                onClose();
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

    useEffect(() => {
        if (modalActive) {
            document.body.classList.add('_lock');
            setIsSubmitButtonDisabled(false);
        }
    }, [modalActive]);

    return (
        <div>
            <div className={modalActive ? "modalForm _active" : "modalForm"} onClick={() => handleClose()}>
                <div className={modalActive ? "modalForm__content _active" : "modalForm__content"} onClick={e => e.stopPropagation()}>
                    <div className="modalForm__close-ico" onClick={() => handleClose()}><img src={ClossIco} alt="" /></div>
                    <div className="modalForm__title">Записаться на консультацию</div>
                    <form action="" className="modalForm__form form-modalForm" onSubmit={handleSubmit}>
                        <div className="form-modalForm__inputs">
                            <input
                                type="text"
                                maxLength="128"
                                minLength="1"
                                name="first_name"
                                value={formData.first_name}
                                onChange={handleInputChange}
                                className="form-modalForm__input"
                                placeholder="Ваше имя"
                            />
                            <input
                                type="text"
                                maxLength="128"
                                minLength="1"
                                name="last_name"
                                value={formData.last_name}
                                onChange={handleInputChange}
                                className="form-modalForm__input"
                                placeholder="Ваша фамилия"
                            />
                            <input
                                type="tel"
                                minLength="1"
                                maxLength="16"
                                pattern="\d*"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="form-modalForm__input"
                                placeholder="Ваш номер телефона"
                            />
                        </div>
                        <div className="form-modalForm-box">
                            <button className="form-modalForm__btn" disabled={!isFormValid || isLoading || isSubmitButtonDisabled}>
                                {isLoading ? <Loader /> : 'Отправить заявку'}
                            </button>
                            <div className="form-modalForm__desc">Мы свяжемся с вами в ближайшее время для уточнения деталей и назначения консультации. Благодарим за обращение!</div>
                        </div>
                    </form>
                </div>
            </div>
            <ModalAccept active={isModalOpen} setActive={setIsModalOpen} />
        </div>
    );
};

export default ModalForm;