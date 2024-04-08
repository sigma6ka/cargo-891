import React from "react";
import aboutUsBenefits from './aboutUsBenefits';

function Benefits() {
    return (
        <div className="about-us__benefits">
            {aboutUsBenefits.map((elems) =>
                <div key={elems.id} className="about-us__benefit">
                    <div className="about-us__benefit-title">{elems.title}</div>
                    <div className="about-us__benefit-desc">{elems.description}</div>
                </div>
            )}
        </div>
    )
}

export default Benefits;