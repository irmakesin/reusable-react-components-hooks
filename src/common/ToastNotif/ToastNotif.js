import React, {useEffect, useCallback, useRef, useState} from "react";
import './ToastNotif.scss';
import { ReactComponent as DismissIcon } from '../../assets/dismiss.svg'
import {NavLink} from "react-router-dom";

export function ToastNotif(props){

    const { toastlist, position, setList } = props;
    const [hoveredElement,setHoveredElement] = useState(null)

    const blockDelete = (id) => {
        setHoveredElement(id)
    }
    const blockLeave = () => {
        setHoveredElement(null)
    }

    const deleteToast = useCallback(id => {
        const toastListItem = toastlist.filter(e => e.id !== id);
        setList(toastListItem);
    }, [toastlist, setList]);

    useEffect(() => {
        let interval
        if(toastlist.length) {
            //to do: hoverla ilgili bug burda

            const elementForDelete = hoveredElement === toastlist[0].id ? toastlist[1]
                : toastlist[0]
            if(elementForDelete) {
                const intervalTime = elementForDelete.type === "multi" ? 7000 : 3000
                interval = setInterval(() => {
                    deleteToast(elementForDelete.id);
                }, intervalTime);
            }
        }
        return () => {
            clearInterval(interval);
        }
    }, [toastlist, deleteToast,hoveredElement]);

    return (
        <div className={`${"notification_container"} ${position}`}>
            {
                toastlist.map((toast, i) => (
                    <React.Fragment key={i}>
                        <div
                            onMouseEnter={() => blockDelete(toast.id)}
                            onMouseLeave={() => blockLeave()}
                            className={`notification toast ${position}`}
                            style={{ backgroundColor: toast.backgroundColor, borderColor: toast.borderColor }}
                        >
                            <div className="toast_content">
                                <img className="toast_icon" src={toast.icon} alt="" />
                                <span className="title">{toast.title}</span>
                                <DismissIcon onClick={() => deleteToast(toast.id)}/>
                            </div>
                            <span className="description">{toast.description}</span>
                            <div className="link">
                                <NavLink style={{ color: toast.color}} to={'/ShowButtons'}>{toast.link}</NavLink>
                            </div>
                        </div>
                    </ React.Fragment>
                ))
            }
        </div>
    )
}