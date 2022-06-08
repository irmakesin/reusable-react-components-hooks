import React from "react";
import PropTypes from 'prop-types';
import { ButtonTypes, ButtonSizes } from './ButtonTypes';
import './Button.scss';
export function Button(props){
    const { size, type, leftIcon, rightIcon, label, disabled, onClickFunc} = props;

    const buttonClasses = [
        "button",
        `button--${size}`,
        `button--${type}`,
    ];

    return (
        <div>
            <button
                className={buttonClasses.join(' ')}
                disabled={disabled}
                onClick={onClickFunc}
            >
                {leftIcon ? leftIcon : <span></span>}
                {label}
                {rightIcon ? rightIcon : <span></span>}
            </button>
        </div>
    );
}

Button.propTypes = {
    type: PropTypes.oneOf(Object.values(ButtonTypes)),
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    size: PropTypes.oneOf(Object.values(ButtonSizes)),
    //onClickFunc: PropTypes.func.isRequired
};

Button.defaultProps = {
    type: ButtonTypes.PRIMARY,
    label: "",
    disabled: false,
    size: ButtonSizes.DEFAULT,
};