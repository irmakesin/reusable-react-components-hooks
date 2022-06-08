import React, { useState } from 'react'
import './Input.scss'
import { ReactComponent as IconError } from '../../assets/input-error.svg'
import { ReactComponent as IconCheck } from '../../assets/check.svg'
import { ReactComponent as ClearIcon } from '../../assets/clear-text.svg'

export function Input ({
                           size,
                           icon,
                           required,
                           disabled,
                           type,
                           hintToolTip,
                           data,
                           placeHolder,
                           label,
                           helperIcon,
                           helperText,
                           letterLimit,
                           letterText,
                           dangerError,
                           setInputValue,
                           inputValue
                       }) {
    const [selectCountry, setSelectCountry] = useState()
    const [error, setError] = useState({})
    const [tooltip, setTooltip] = useState()
    const [fill, setFill] = useState("");
    const [focus, setFocus] = useState("");

    const formatCellPhone = (value, previousValue) => {
        // return nothing if no value
        if (!value) return value;
        // only allows 0-9 inputs
        const currentValue = value.replace(/[^\d]/g, '');
        const cvLength = currentValue.length;

        if (!previousValue || value.length > previousValue.length) {
            // returns: "x", "xx", "xxx"
            if (cvLength < 4) return currentValue;
            // returns: "(xxx)", "(xxx) x", "(xxx) xx", "(xxx) xxx",
            if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
            // returns: "(xxx) xxx-", (xxx) xxx-x", "(xxx) xxx-xx", "(xxx) xxx-xxx", "(xxx) xxx-xxxx"
            return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
        }
    };

    const handleOnFocus = (props) => {
        setFocus(props);
    };
    const handleOnBlur = (props) => {
        setFocus(props);
    };
    const handleClearInnerText = (item) => {
        setInputValue(item);
    };

    const handleChange = (e) => {
        inputValue ? setFill(true) : setFill(false);
        if (type === 'phone') {
            const formatted = formatCellPhone(e.target.value);
            setInputValue(formatted);

        } else if (type === 'tooltip') {
            setTooltip(true)
            if (e.target.value.length < 1)
                setTooltip(false)
            setInputValue(e.target.value);
        } else {
            setInputValue(e.target.value);
        }
        if (letterLimit) {
            if (letterLimit < e.target.value.length) {
                error.inputError = true
                setFill(false)
                console.log(error.inputError);
            }
            else { error.inputError = false }
            setInputValue(e.target.value);
        }
    };

    return (
        <div className='input'>
            <div>
                {label && (
                    <label className="label" htmlFor="input">
                        {label}
                    </label>
                )}
                {type === 'phone' ?
                    <>
                        {
                            selectCountry?.code === 'TR' ?
                                <span className={`Icon country_code_tr ${size}`}>{icon}</span>
                                :
                                <span className={`Icon ${size} country_code`}>{selectCountry?.code}</span>
                        }
                        <select
                            className={`dropdown_phone ${size}`}
                            onChange={(e) => setSelectCountry(...data.filter(x => x.code === e.target.value))}
                            //onChange={(e) => setSelectCountry(e.target.value)}
                        >
                            {
                                data?.map((value, index) => (
                                    <option
                                        key={index}
                                        value={value?.code}
                                        dial_code={value?.dial_code}
                                    >
                                        {value?.name}
                                    </option>
                                ))
                            }
                        </select>
                    </>
                    :
                    icon &&
                    <span className={`icon ${size} icon-${dangerError ? "error" : ""}`} >{icon}</span>
                }
            </div>
            {selectCountry?.dial_code &&
                <span className={`country_dial_code  ${size}`} >
                    {selectCountry?.dial_code}
                </span>}

            <input
                className=
                    {`form_input 
                      form_input-${focus ? "focus" : ""}
                      form_input-${dangerError ? "error" : ""}
                      form_input-${fill ? "filled" : ""}
                      form_input-${disabled ? "disabled_input" : ""}
                    ${type === 'phone' ? `phone_input
                    ${selectCountry?.dial_code && 'phone_code'}` : icon && ' icon_with_placeholder'} ${size}`}
                placeholder={placeHolder}
                required={required}
                value={inputValue}
                disabled={disabled}
                onBlur={() => handleOnBlur(false)}
                onFocus={() => handleOnFocus(true)}
                type="search"
                onChange={handleChange} />

            {fill && focus ? (
                <label className={`clear_text ${size}`} onMouseDown={() => handleClearInnerText("")}>
                    <ClearIcon></ClearIcon>
                </label>
            ) : (
                dangerError && (
                    <label className="danger_error">
                        <IconError></IconError>
                    </label>
                )
            )}

            { tooltip &&
                <>
                    <div className="arrow-left"></div>
                    <div className='hint_tooltip'>
                        {
                            hintToolTip?.map((x, i) => (
                                <div key={i} className='text_tooltip'>
                                    {
                                        x.isValid ?
                                            <IconCheck></IconCheck> : <div className="circle"> </div>
                                    }
                                    <div className={`text_tooltip ${x.isValid ? 'text_valid' : ''}`}>
                                        {x.text}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </>
            }
            { (helperText || helperIcon) &&
                <>
                    <div className={`helper_text helper_text-${dangerError ? "error" : ""}`} >
                        <div>
                            { helperText &&
                                <label>
                                    {helperText}
                                </label>
                            }
                        </div>
                        <div className="helper_icon">
                            {helperIcon &&
                                <label>
                                    {helperIcon}
                                </label>
                            }
                        </div>
                    </div>
                </>
            }
            {
                letterLimit &&
                <>
                    <div className={`letter_text letter_text-${dangerError ? "error" : ""}`}>
                        <label className={(error.inputError) ? 'letter_error' : ''}>
                            {letterText}
                        </label>
                        <label className={`letter_count ${(error.inputError) ? 'letter_error' : ''}`}>
                            {inputValue?.length ? inputValue?.length : "0"}/{letterLimit}
                        </label>
                    </div>
                </>
            }
        </div>
    )
}
