import React from "react";
import './advantages.css'
import ItemConsultation from "../../local/ItemConsultation";
import AdvatnagesItem from "./AdvantagesItem";

function Advantages() {

    return (
        <section className="page__advantages advantages">
            <div className="advantages__container">
                <h2 className="advantages__title _title-2"><span>Работая с нами</span>, вы получаете</h2>
                <div className="advantages__items">
                    <AdvatnagesItem cardNumb={'01'} cardTitle={'Качество и надежность'}/>
                    <AdvatnagesItem cardNumb={'02'} cardTitle={'Скорость'} />
                    <AdvatnagesItem cardNumb={'03'} cardTitle={'Низкие цены'} />
                    <AdvatnagesItem cardNumb={'04'} cardTitle={'Скидки'} />
                    <ItemConsultation />
                </div>
            </div>
        </section>
    )
}

export default Advantages;