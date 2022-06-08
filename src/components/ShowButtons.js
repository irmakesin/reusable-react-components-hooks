import React from "react";

import { Button } from '../common/Button/Button.js';
import { ReactComponent as AddIcon } from '../assets/add-circle.svg';
import { ReactComponent as SelectBoxIcon } from '../assets/selectbox-icon.svg';

export function ShowButtons() {
    return (
        <React.Fragment>
            <div>
                <Button
                    size="small"
                    label="Button"
                    type="primary"
                    leftIcon={<AddIcon />}
                    onClickFunc={() => alert("clicked")}
                />

                <Button
                    size="default"
                    label="Button"
                    type="primary"
                    rightIcon={<SelectBoxIcon />}
                />

                <Button
                    size="default"
                    label="Button"
                    type="secondary"
                    leftIcon={<AddIcon />}
                    disabled
                />

                <Button
                    size="large"
                    label="Button"
                    type="secondary"
                    disabled
                />

                <Button
                    size="tiny"
                    label="Button"
                    type="tertiary"
                    rightIcon={<AddIcon />}
                />

                <Button
                    size="default"
                    label="Button"
                    type="tertiary"
                />

                <Button
                    size="small"
                    label="Button"
                    type="ghost"
                    leftIcon={<AddIcon />}
                />

                <Button
                    size="large"
                    label="Button"
                    type="ghost"
                    rightIcon={<SelectBoxIcon />}
                />

                <Button
                    size="large"
                    label="Button"
                    type="link"
                    leftIcon={<AddIcon />}
                />

                <Button
                    size="tiny"
                    label="Button"
                    type="link"
                    rightIcon={<AddIcon />}
                />

                <Button
                    size="default"
                    label="Button"
                    type="uiButtonSuccess"
                />

                <Button
                    size="default"
                    label="Button"
                    type="uiButtonDanger"
                />

            </div>
        </React.Fragment>
    );
}
