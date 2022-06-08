import React, { useEffect, useRef, useState } from 'react'
import './Table.scss'
import Pagination from '../Pagination/Pagination'
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {ReactComponent as SearchIcon} from "../../assets/search.svg";

const createColumnHeaders = (headers) => {
    return headers.map((item) => ({
        ...item,
        ref: useRef()
    }));
};

export const Table = ({ data, tableHeader, pageTitle, search, listLength }) => {
    const [value, setValue] = useState()
    const [list, setList] = useState()
    const [totalData, setTotalData] = useState()
    const [page, setPage] = useState(1);
    const [checkedState, setCheckedState] = useState([]);
    const columns = createColumnHeaders(tableHeader);

    let secondPage = page * listLength
    let firstPage = secondPage - listLength

    const handleChecked = (e) => {
        let checked = checkedState.some(x => x.checkedKey === e.id)
        checked
        ? setCheckedState(checkedState?.filter((x) => x.checkedKey !== e.id))
        : setCheckedState([...checkedState, { checkedList: e.discountName, checkedKey: e.id }])
    }

    useEffect(() => {
        if (value) {
            let lengthValue = data?.discounts.filter((x, index) => (
                x?.id?.toLowerCase().includes(value?.toLowerCase()) ||
                x?.discountName?.toLowerCase().includes(value?.toLowerCase()) ||
                x?.includedMerchants[0]?.name?.toLowerCase().includes(value?.toLowerCase())))
            setList(lengthValue?.slice(firstPage, secondPage))
            setTotalData(lengthValue?.length)
        } else {
            setList(data?.discounts?.slice(firstPage, secondPage))
            setTotalData(data?.discounts?.length)
        }
        setAllChecked(false)
    }, [value, data, page])

    const [allChecked, setAllChecked] = useState(false)

    const handleAllChecked = (e) => {
        setAllChecked(!allChecked)
        let data = []
        if (e.target.checked) {
            list?.forEach(element => {
                data.push({ checkedList: element.discountName, checkedKey: element.id })
            });
            setCheckedState([...checkedState, ...data])
        } else {
            setCheckedState([])
        }
    }

    const scrollRef = useRef(null);
    const scroll = (scrollOffset) => {
        scrollRef.current.scrollLeft += scrollOffset;
    };

    return (
        <>
            <div className='table-upper'>
                <span className="table-page-title">{pageTitle}</span>
                <div className="discount-container">
                    <div className="discount-input">
                        <span className="search-icon">
                            <SearchIcon/>
                        </span>
                    <Input
                        size="small"
                        placeHolder="İndirim Adı, kampanya id, veya mağaza"
                    />
                    </div>
                    <div className="discount-button">
                        <Button
                            size="small"
                            label="İndirim oluştur"
                        />
                    </div>
                </div>
            </div>
            <div className="table-headers">
                <div>
                    {search &&
                            <input
                                className='table-filter'
                                placeHolder='Filtrele'
                                onChange={e => setValue(e.target.value)}
                            />
                    }
                </div>
                <div className="table-right-header">
                    <span className="table-right-title">Dışarı Aktar</span>
                    <div className="title-line">|</div>
                    <div className='scroll-flex'>
                        <div
                            className='scroll-arrow'
                            onClick={() => scroll(-200)}
                        >
                            {"<"}
                        </div>
                        <div
                            className='scroll-arrow'
                            onClick={() => scroll(+200)}
                        >
                            {">"}
                        </div>
                    </div>
                </div>
            </div>

            <div className="table-wrapper" >
                <table ref={scrollRef} className="table" >
                    <thead>
                    <tr>
                        {
                            columns.map((item, i) => (
                                <th
                                    className={list?.length === 0 ? 'value-null' : ""}
                                    key={i}
                                >
                                    {i === 0 && (
                                        <input
                                            type="checkbox"
                                            id={item?.id}
                                            value={item?.discountName}
                                            className='checkbox-input'
                                            checked={allChecked}
                                            onChange={(e) => handleAllChecked(e)} />
                                    )}
                                    {item?.title}
                                </th>
                            ))
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        list?.map((item, i) => (
                            <tr key={i} onClick={() => handleChecked(item)}>
                                {
                                    tableHeader.map((col, i) => (
                                        <td
                                            key={col.key}
                                            className={checkedState.some(c => c.checkedKey === item.id) && 'selected-table'}
                                        >
                                            {i === 0 && (
                                                <input
                                                    type="checkbox"
                                                    id={item?.id}
                                                    value={item?.discountName}
                                                    className='checkbox-input'
                                                    checked={checkedState.some(c => c.checkedKey === item.id)}
                                                    onChange={(e) => handleChecked(item)}
                                                />
                                            )}
                                            {col.render ? (
                                                <span>{col.render(item[col.name])}</span>
                                            ) : (
                                                <span>{item[col.name]}</span>
                                            )}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
            <div className='table-footer'>
                <div>
                    <span className="discount">{data?.discounts?.length}</span>
                    <span className="discount-text">{" "}indirimden</span>
                    <span className="discount-2">{" "}{firstPage + 1} - {secondPage > data?.discounts?.length
                        ? data?.discounts?.length
                        : secondPage}
                    </span>
                    <span className="discount-text-2">{" "}arasını görüntülüyorsunuz.</span>
                </div>
                <div>
                    <Pagination
                        totalData={totalData}
                        setPage={setPage}
                        page={page}
                        listLength={listLength}
                    />
                </div>
            </div>
        </>
    )
}
