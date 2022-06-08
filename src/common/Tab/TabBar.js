import React from "react";
import './TabBar.scss';

export default function (props){
    return(
        <div {...props}
             className={`tab_bar ${props.className}`}
             onClick={!props.disabled && props.onClick}
        >
            {props.children}
        </div>
    )
}