import React, { useState } from 'react';
import {Button} from "../common/ToastNotif/Button";
import {ToastNotif} from "../common/ToastNotif/ToastNotif";
import ErrorIcon from '../assets/error.svg';
import InfoIcon from '../assets/info.svg';
import SuccessIcon from '../assets/success.svg';
import WarningIcon from '../assets/warning.svg';
import AlertErrorIcon from '../assets/alert-error.svg'
import AlertInfoIcon from '../assets/alert-info.svg'
import AlertSuccessIcon from '../assets/alert-success.svg'
import AlertWarningIcon from '../assets/alert-warning.svg'
import {isMobile} from "react-device-detect";

 export function ShowToastNotif() {
    const [list, setList] = useState([]);
    let toastProperties = null;

    const showToast = type => {
        switch(type) {
            case 'error-multiline':
                    toastProperties = {
                    id: list.length+1,
                    title: 'Error',
                    description: 'Error message',
                    backgroundColor: isMobile ? '#ffffff' : '#fee0e0',
                    icon: isMobile ? AlertErrorIcon : ErrorIcon,
                    type: "multi",
                    link: "error-link", //route link de prop geçilebilir
                    color: isMobile ? "#484848" : "#fa3f3f",
                    borderColor: "#fa3f3f"
                }
                break;
            case 'error-singleline':
                toastProperties = {
                    id: list.length+1,
                    title: 'Error',
                    backgroundColor: isMobile ? '#ffffff' : '#fee0e0',
                    icon: isMobile ? AlertErrorIcon : ErrorIcon,
                    type: "single",
                    link: "error-link",
                    color: isMobile ? "#484848" : "#fa3f3f",
                    borderColor: "#fa3f3f"
                }
                break;
            case 'info-multiline':
                toastProperties = {
                    id: list.length+1,
                    title: 'Info',
                    description: 'Info Message',
                    backgroundColor: isMobile ? '#ffffff' : '#f4f6ff',
                    icon: isMobile ? AlertInfoIcon : InfoIcon,
                    type: "multi",
                    link: "info-link",
                    color: isMobile ? "#484848" : "#6c84fa",
                    borderColor: "#6c84fa"
                }
                break;
            case 'info-singleline':
                toastProperties = {
                    id: list.length+1,
                    title: 'Info',
                    backgroundColor: isMobile ? '#ffffff' : '#f4f6ff',
                    icon: isMobile ? AlertInfoIcon : InfoIcon,
                    type: "single",
                    color: isMobile ? "#484848" : "#6c84fa",
                    borderColor: "#6c84fa"
                }
                break;
            case 'success-multiline':
                toastProperties = {
                    id: list.length+1,
                    title: 'Success',
                    description: 'Success Message',
                    backgroundColor: isMobile ? '#ffffff' : '#ebf9ec',
                    icon: isMobile ? AlertSuccessIcon : SuccessIcon,
                    type: "multi",
                    link: "success-link",
                    color: isMobile ? "#484848" : "#5ad363",
                    borderColor: "#5ad363"
                }
                break;
            case 'success-singleline':
                toastProperties = {
                    id: list.length+1,
                    title: 'Success',
                    backgroundColor: isMobile ? '#ffffff' : '#ebf9ec',
                    icon: isMobile ? AlertSuccessIcon : SuccessIcon,
                    type: "single",
                    color: isMobile ? "#484848" : "#5ad363",
                    borderColor: "#5ad363"
                }
                break;
            case 'warning-multiline':
                toastProperties = {
                    id: list.length+1,
                    title: 'Warning',
                    description: 'Warning message',
                    backgroundColor: isMobile ? '#ffffff' : '#fffae9',
                    icon: isMobile ? AlertWarningIcon : WarningIcon,
                    type: "multi",
                    link: "warning-link",
                    color: isMobile ? "#484848" : "#f5cf3f",
                    borderColor: "#f5cf3f"
                }
                break;
            case 'warning-singleline':
                toastProperties = {
                    id: list.length+1,
                    title: 'Warning',
                    backgroundColor: isMobile ? '#ffffff' : '#fffae9',
                    icon: isMobile ? AlertWarningIcon : WarningIcon,
                    type: "single",
                    color: isMobile ? "#484848" : "#f5cf3f",
                    borderColor: "#f5cf3f"
                }
                break;
            default:
                toastProperties = [];
        }
        setList([...list, toastProperties]);
    };

    return (
        <div className={"buttons"}>
            <Button handleClick={() => showToast('error-multiline')}>Error-Multiline</Button>
            <Button handleClick={() => showToast('error-singleline')}>Error-Singleline</Button>
            <Button handleClick={() => showToast('info-multiline')}>Info-Multiline</Button>
            <Button handleClick={() => showToast('info-singleline')}>Info-Singleline</Button>
            <Button handleClick={() => showToast('success-multiline')}>Success-Multiline</Button>
            <Button handleClick={() => showToast('success-singleline')}>Success-Singleline</Button>
            <Button handleClick={() => showToast('warning-multiline')}>Warning-Multiline</Button>
            <Button handleClick={() => showToast('warning-singleline')}>Warning-Singleline</Button>
            <ToastNotif toastlist={list} position="button_direction" setList={setList} />
        </div>
    );
}