import React, { useState } from 'react'
import { Button } from '../common/Button/Button'
import { Drawer } from '../common/Drawer/Drawer.js'
import { Input } from '../common/Input/Input.js'

export const ShowDrawers = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")
    const [birthday, setBirthday] = useState("")
    const [cellphone, setCellPhone] = useState("")

    const footer = () => {
        return (
            <>
                <div className="drawer_buttons">
                <div>
                    <Button
                        type="primary"
                        size="default"
                        label="close"
                        onClickFunc={() => setIsOpen(!isOpen)}
                    >
                    </Button>
                </div>
                <div>
                    <Button
                        type="ghost"
                        size="default"
                        label="save"
                        onClickFunc={() => alert("saved")}
                    >
                    </Button>
                </div>
                </div>
            </>
        )
    }

    const body = () => {
        return (
            <>
                <div className="drawer_inputs">
                <Input type="search" label="name" placeHolder="name" inputValue={name} setInputValue={setName} ></Input>
                <Input type="search" label="surname" placeHolder="surname" inputValue={surname} setInputValue={setSurname} ></Input>
                <Input type="search" label="age" placeHolder="age" inputValue={age} setInputValue={setAge} ></Input>
                <Input type="search" label="city" placeHolder="city" inputValue={city} setInputValue={setCity} ></Input>
                <Input type="search" label="cellphone" placeHolder="cellphone" inputValue={cellphone} setInputValue={setCellPhone} ></Input>
                <Input type="search" label="birthday" placeHolder="birthday" inputValue={birthday} setInputValue={setBirthday} ></Input>
                <Input type="search" label="birthday" placeHolder="birthday" inputValue={birthday} setInputValue={setBirthday} ></Input>
                <Input type="search" label="birthday" placeHolder="birthday" inputValue={birthday} setInputValue={setBirthday} ></Input>
                <Input type="search" label="birthday" placeHolder="birthday" inputValue={birthday} setInputValue={setBirthday} ></Input>
                </div>
            </>
        )
    }

    return (
        <div>
            <div>
                <Button
                    type="link"
                    size="default"
                    label='Drawers'
                    onClickFunc={() => setIsOpen(!isOpen)}
                />
            </div>
            <Drawer
                size="large"
                title="drawer modal"
                position="left"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                onClose={() => setIsOpen(false)}
                footer={footer()}
                body={body()}
            />
        </div>
    )
}
