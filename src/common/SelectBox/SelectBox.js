import React, { useState, useEffect, useRef } from "react";
import "./SelectBox.scss";
import { ReactComponent as SearchIcon } from '../../assets/search.svg'
import { ReactComponent as ClearIcon } from '../../assets/clear-text.svg'

export function SelectBox({
                         label,
                         data,
                         placeholder,
                         tabActive = false,
    disabled
                     }) {

    const [input, setInput] = useState("");
    const [open, setOpen] = useState(tabActive);
    const [select, setSelect] = useState([]);
    const [focus, setFocus] = useState("");

    const ref = useRef();

    const handleOnFocus = (props) => {
        setFocus(props);
    };
    const handleOnBlur = (props) => {
        setFocus(props);
    };

    const handleInput = (i) => {
        setInput(i.target.value);
    };

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleClear = () => {
        setInput("");
    };

    const handleSelection = (e) => {
        setSelect((prevState) =>
            prevState.indexOf(e) > -1
                ? [...prevState.filter((i) => i !== e)]
                : [...prevState, e]
        );
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!ref?.current?.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);

    const handleThreeDots = (array) => {
        const withComma = array.join(', ')
        const lengthLimit = withComma.substring(0,54)
        return withComma.length > 54 ? lengthLimit + ' ...' : withComma
    }


    return (
        <div className="selectbox_header">
            <label className="label" htmlFor="input">
                {label}
            </label>
            <div className= "select_container">
            <div
                onClick={handleOpen}
                className= {`selectbox_input_wrapper 
                      selectbox_input_wrapper-${disabled ? "disabled" : ""}
                      `}
            >
                <input
                    disabled={disabled}
                    type="input"
                    placeholder={placeholder}
                    value = {handleThreeDots(select)}
                    className = {`input 
                      input-${disabled ? "disabled_input" : ""}
                      input-${open ? "active" : ""}
                      input-${focus ? "focus" : ""}
                      `}
                    onBlur={() => handleOnBlur(false)}
                    onFocus={() => handleOnFocus(true)}
                />

                {select.length > 0 &&
                    <span className="bubble">
                        {select.length}
                    </span>
                }
                <span className="arrow_icon"></span>
            </div>

            {data && open &&
                (
                <div className="dropdown_header" ref={ref}>
                    <div className="filter_search">
                        <SearchIcon className="search_icon" />
                        {input.length > 0 &&
                            <ClearIcon
                                className="clear_icon"
                                onClick={handleClear}
                            />
                        }
                        <input
                            className="filter"
                            onChange={handleInput}
                            placeholder="Filtrele"
                            type="input"
                            value={input}
                        />
                    </div>
                    {
                        data
                        .filter((item) => item.text.toLowerCase().includes(input))
                        .map((item, index) => (
                            <label
                                className="product_list"
                                key={index}
                            >
                                {item.text}
                                <input
                                    className="select_checkbox"
                                    type="checkbox"
                                    value={item.value}
                                    checked={select.indexOf(item.value) > -1}
                                    onChange={(i) => handleSelection(i.target.value)}
                                />
                                <span className="select_checkmark"></span>
                            </label>
                        ))}
                </div>
            )}
            </div>
        </div>
    );
}
