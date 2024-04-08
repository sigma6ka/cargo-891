import Timeline from "../timeline/Timeline";
import processWorkData from './processWorkData';
import './processWork.css';
import Accordion from "../../local/accordion/Accrodion";

function ProcessWork() {

    return (
        <section id="stages" className="page__process-work process-work">
            <div className="process-work__container">
                <h2 className="process-work__title _title-2">Подробно объясним <span>процесс работы</span></h2>
                <Timeline />
                <Accordion data={processWorkData}/>
            </div>
        </section>
    )
}

export default ProcessWork;