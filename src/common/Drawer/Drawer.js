import React, { useState, useEffect } from 'react'
import "./Drawer.scss"
import { ReactComponent as CircleClose } from '../../assets/circle-close.svg'

export function Drawer ({
                            size,
                            position="right",
                            body,
                            isClose,
                            isOpen,
                            setIsOpen,
                            title,
                            footer }) {

    const [topTitle, setTopTitle] = useState()

    const handleScroll = (e) => {
        if (e.target.scrollTop > 4) {
            setTopTitle(true);
        } else {
            setTopTitle(false);
        }
    }

    return (
        <>
            {isOpen &&
                <>
                    <div className={`${isOpen && 'background'}`} onClick={isClose}></div>
                    <div className={`drawer ${size} ${position}`}>
                        <div className={`drawer_title ${topTitle && 'scroll_title'}`}>
                            <div className='close_drawer'
                                 onClick={() => setIsOpen(false)}>
                                <CircleClose></CircleClose>
                            </div>
                            {topTitle &&
                                <div className={`title ${topTitle && 'show_title'}`}>
                                    {title}
                                </div>}
                        </div>
                        <div className='drawer_body'
                             onScroll={handleScroll}>
                            {!topTitle &&
                                <div className='title'>
                                    {title}
                                </div>}
                            {body}
                        </div>
                        <div className="drawer_footer">
                            <div className="body_transparent">
                            </div>
                            <div>
                                {footer}
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}
