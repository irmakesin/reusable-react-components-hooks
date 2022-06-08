import React from "react";
import {SelectBox} from "../common/SelectBox/SelectBox";
import category from "../data/CategoryTree.json"

export function ShowSelectBoxes() {
    let dataUpdate = []
    let text = "";

    const jsonData = (item, text) => {
        item?.forEach((data) => {
            newCategoryData(data, text + " ... " + data.name);
        });
    }

    const newCategoryData = (data, text) => {
        if (data.children) {
            jsonData(data.children, text);
        } else {
            dataUpdate.push({
                key: data.id,
                value: data.name,
                text: `${text}[${data.id}]`.slice(2),
            });
        }
    }

    jsonData(category, text)

    return (
        <div className="show_selects">
            <SelectBox
                label="Kategori"
                placeholder="Kategori seçin"
                data={dataUpdate}
            />
            <SelectBox
                label="Satıcı"
                placeholder="Satıcı seçin"
                data={dataUpdate}
                disabled={true}
            />
        </div>
    );
}
