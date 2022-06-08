import React from 'react'
import { Table } from '../common/Table/Table'
import Data from '../data/tableData.json'

export const ShowTable = () => {

    const tableHeader = [
        {
            name: "campaignId",
            title: "Kampanya ID",
            render: (value) => (
                <span className="table-content-campaignId">{value}</span>
            ),
        },
        {
            name: "discountName",
            title: "İndirim adı",
            render: (value) => <span>{value}</span>,
        },
        {
            name: "affectedListingCount",
            title: "Etkilenen Liste Sayısı",
            render: (value) => <span>{value ? value : "-"}</span>,
        },
        {
            name: "includedMerchants",
            title: "Mağaza",
            render: (value) => <span>{value[0]?.legalName}</span>,
        },
        {
            name: "includedSkus",
            title: "Hedef",
            render: (value) => <span>{value}</span>,
        },
        {
            name: "status",
            title: "Durum",
            render: (value) => (
                <div className={value !== 0 ? 'status active' : 'status passive'}>
                    {value !== 0 ? 'Aktif' : 'Pasif'}
                </div>
            ),
        },
        {
            name: "startDate",
            title: "Başlangıç Tarihi",
            render: (value) => <span>{value}</span>,
        },
        {
            name: "endDate",
            title: "Bitiş Tarihi",
            render: (value) => <span>{value}</span>,
        },
    ];

    return (
        <div>
            <Table
                data={Data}
                tableHeader={tableHeader}
                pageTitle={'İndirim Listesi'}
                listLength={6}
                search
            >
            </Table>
        </div>
    )
}
