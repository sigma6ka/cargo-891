import React from 'react';
import timelineElements from './timelineElements';
import './timeline.css';

function Timeline() {
    return (
        <div className="timeline__content">
            <div className="timeline__cd cd-timeline">
                {timelineElements.map((el) =>
                    <div key={el.id} className="cd-timeline__block _anim-items">
                        <div className="cd-timeline__circle"><span></span></div>
                        <div className="cd-timeline__content">
                            <div className="cd-timeline__title">{el.title}</div>
                            <div className="cd-timeline__desc">{el.description}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Timeline;