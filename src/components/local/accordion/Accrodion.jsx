import React, { useState } from "react";
import arrow from './../../../img/process-work/arrow-right.svg';
import PropTypes from 'prop-types';
import './accordion.css'

const Accordion = ({ data }) => {
    const [openId, setOpenId] = useState(null);

    const clickHandler = (index) => {
        setOpenId((prevId) => (prevId === index ? null : index));
    };

    return (
        <div className="accordion">
            <div className="accordion__items">
                {data.map((item, i) => (
                    <div key={item.id} className="accordion__item">
                        <button className={`accordion__item-title ${i === openId ? 'open' : ''}`} onClick={() => clickHandler(i)}>
                            {item.question}
                            <span className={`accordion__item-title-arrow ${i === openId ? 'open' : ''}`}>
                                <img src={arrow} alt="" />
                            </span>
                        </button>
                        {item.content.map((elems) => (
                            <div
                                key={elems.id}
                                className={`accordion__item-collapse ${i === openId ? 'open' : ''}`}
                            >
                                {elems.subtitle != null && (
                                    <div key={elems.id} className="accordion__item-text-content">
                                        {elems.subtitle !== '' && (
                                            <div className="accordion__item-subtitle">{elems.subtitle}</div>
                                        )}
                                        <div className="accordion__item-description">{elems.answer}</div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

Accordion.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            question: PropTypes.string.isRequired,
            content: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    subtitle: PropTypes.string,
                    answer: PropTypes.string.isRequired,
                })
            ).isRequired,
        })
    ).isRequired,
};

export default Accordion;