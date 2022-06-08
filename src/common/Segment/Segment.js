import React, {useState, useEffect} from "react";
import './Segment.scss';
import {SegmentSizes, SegmentTypes} from "./SegmentTypes";
import PropTypes from 'prop-types';

export function Segment(props) {
        const { segments, controlRef, size, type, activeTab=0 } = props;
        const [activeIndex, setActiveIndex] = useState(activeTab);

    const segmentClasses = [
        `segment--${type}`,
        `segment--${size}`,
    ];

        useEffect(() => {
            const activeSegmentRef = segments[activeIndex].ref;
            const { offsetWidth, offsetLeft } = activeSegmentRef.current;
            const { style } = controlRef.current;

            style.setProperty("--highlight-width", `${offsetWidth}px`);
            style.setProperty("--highlight-x-pos", `${offsetLeft}px`);
        }, [activeIndex, controlRef, segments]);

        const handleChange = (value, index) => {
            if (index !== activeIndex) {
                setActiveIndex(index);
            }
        };

    return(
        <div className= {'segments-container ' + segmentClasses.join(' ') }ref={controlRef}>
            <div className="controls ready">
                {segments?.map((item, index) => (
                    <div
                        key={item.index}
                        className={`segment ${index === activeIndex ? "active" : "" }`}
                        ref={item.ref}
                        onClick={() => handleChange(item.index, index)}
                    >
                        <input
                            type="radio"
                        />
                        <label htmlFor={item.label}>
                            {item.label}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

Segment.propTypes = {
    type: PropTypes.oneOf(Object.values(SegmentTypes)),
    label: PropTypes.string.isRequired,
    size: PropTypes.oneOf(Object.values(SegmentSizes)),
};

Segment.defaultProps = {
    type: SegmentTypes.DEFAULT,
    label: "",
    size: SegmentSizes.LARGE,
};