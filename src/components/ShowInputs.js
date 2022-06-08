import React, { useEffect, useState } from 'react'
import {Input} from "../common/Input/Input";
import { ReactComponent as LockIcon } from '../assets/left-icon.svg'
import { ReactComponent as TR } from '../assets/tr.svg'
import { ReactComponent as ErrorIcon } from '../assets/error.svg'
import { ReactComponent as Info } from '../assets/input-info.svg'

export const ShowInputs = () => {

    const [codes, setCodes] = useState()
    const [inputValue, setInputValue] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [surname, setSurname] = useState("")
    const [password, setPassword] = useState("")
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")
    const [name, setName] = useState("")

    useEffect(() => {
        async function getCountryCodes() {
            let url = "https://countriesnow.space/api/v0.1/countries/codes";
            let res = await fetch(url);
            const response = await res.json();
            setCodes(response.data);
        }
        getCountryCodes();
    }, []);

    const hintToolTip = [
        { text: '6 char', isValid: inputValue?.trim().length >= 6 },
        { text: 'Number', isValid: inputValue?.match(/\d/i) },
        { text: 'Punctuation', isValid: inputValue?.match(/[-.,\/#!?$%\^&\*;:{}=\-_`~()]/g,"") },
        { text: 'Uppercase', isValid: inputValue?.match(/[A-Z]/) },
    ]

    return (
        <div>
            <div>
                <Input
                    inputValue={name}
                    setInputValue={setName}
                    type="search"
                    placeHolder="name"
                    size="large"
                    required={true}
                    label="Name"
                    dangerError={<ErrorIcon></ErrorIcon>}
                />
            </div>
            <div>
                <Input
                    inputValue={surname}
                    setInputValue={setSurname}
                    size="large"
                    placeHolder="surname"
                    disabled={true}
                    label="Surname"
                    icon={<LockIcon></LockIcon>}
                />
            </div>
            <div>
                <Input
                    inputValue={password}
                    setInputValue={setPassword}
                    type="search"
                    placeHolder="password"
                    size="default"
                    required={true}
                    icon={<LockIcon></LockIcon>}
                    label="Password"
                    dangerError={<ErrorIcon></ErrorIcon>}
                />
            </div>
            <div>
                <Input
                    inputValue={phone}
                    setInputValue={setPhone}
                    data={codes}
                    placeHolder="phone"
                    icon={<TR></TR>}
                    type="phone"
                    size="default"
                    required={true}
                    label="Phone"
                />
            </div>
            <div>
                <Input
                    inputValue={city}
                    setInputValue={setCity}
                    placeHolder="city"
                    type="search"
                    size="small"
                    required={true}
                    label="City"
                    helperText="helperText"
                />
            </div>
            <div>
                <Input
                    inputValue={age}
                    setInputValue={setAge}
                    placeHolder="age"
                    type="search"
                    size="small"
                    required={true}
                    label="Age"
                    labelAling='right'
                    helperText="helperText"
                    helperIcon={<Info></Info>}
                    helperAling="right"
                />
            </div>
            <div>
                <Input
                    inputValue={address}
                    setInputValue={setAddress}
                    placeHolder="address"
                    type="search"
                    size="small"
                    required={true}
                    label="Address"
                    letterLimit={10}
                    letterText="Don't exceed chars !"
                />
            </div>
            <div>
                <Input
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    type={'tooltip'}
                    placeHolder="password"
                    size="large"
                    hintToolTip={hintToolTip}
                    label="Password"
                />
            </div>
        </div>

    )
}
