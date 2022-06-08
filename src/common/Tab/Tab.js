import React, {useState} from "react";
import './Tab.scss';
import TabBar from './TabBar.js';
import TabContainer from "./TabContainer";

export function Tab(props) {

    const {items,disabled} = props;
    const [activeTab, setActiveTab] = useState(props.activeTab);

    const handleClick = index => {
        if (index !== activeTab) {
            setActiveTab(index);
        }
    };

    return(
        <TabContainer>
            {items.map((item, index) => {
                const isActive = activeTab === index
                return (
                    <TabBar
                        key={index}
                        onClick={() => handleClick(index)}
                        className={isActive ? "activeTab" : ''}
                        disabled={item.disabled}
                    >
                        <div className="tabs_container">
                            <span className={`${"tab_label"} ${item.disabled? "disabled" : ''}`}>{item.label}</span>
                            {item.count && (
                                <span className={`${"tab_count"} ${item.disabled? "disabled" : ''}`}>{item.count}</span>
                            )}
                        </div>
                        <div className={isActive ? "tab_border" : ''}></div>
                    </TabBar>
                )
            })}
        </TabContainer>
    )
}