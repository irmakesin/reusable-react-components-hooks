import React from "react";
import './TabContainer.scss';

export default function (props){
    return(
        <div className="tab_container">
            {props.children}
        </div>
    )
}