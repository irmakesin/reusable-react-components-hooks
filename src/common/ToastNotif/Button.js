import React from "react";

export function Button (props) {
    const {children, handleClick} = props;

    return (
        <button
            className={"button"}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}
