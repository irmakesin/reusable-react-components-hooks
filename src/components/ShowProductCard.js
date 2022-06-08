import React, { useEffect, useState } from 'react'
import { ProductCard } from "../common/ProductCard/ProductCard"
import axios from 'axios'
import Pagination from "../common/Pagination/Pagination"
import {httpGet} from "../services/helper";

export const ShowProductCard = () => {
    const [page, setPage] = useState(1);

    const [data, setData] = useState()
    let listQuantity = 48

    let secondValue = page * listQuantity
    let firstValue = secondValue - listQuantity

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            headers: {
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
                'X-RapidAPI-Key': '947ec79318msh526dd3b2a929449p1aa809jsn9247c2ef289c'
            }
        };

        httpGet(options)
            .then((response) => setData(response.data))
            .catch(function (error) {
                console.error(error);
            });


    }, [])

    var url = 'https://api.currentsapi.services/v1/search?' +
        'keywords=Amazon&language=en&' +
        'apiKey=NaLhncn35c0el-qg08cX6nvZM5o1yRsy11vK81zqiQ4_JEoc';
    var req = new Request(url);
    fetch(req)
        .then(function (response) {
            console.log(response);
        })

    return (
        <div>
            {
                data ?
                    <div className='card-wrapper'>
                        {
                            data?.slice(firstValue, secondValue)?.map((value, index) => (
                                <div key={index} className='card-item'>
                                    <ProductCard
                                        data={value}
                                        bottomCardType={"like"}
                                        textColor='green'
                                        // favIcon
                                        // saveIcon
                                        // bellIcon
                                        // sponsored
                                        // info={'red'}
                                        // info2={'blue'}
                                        // info3
                                    />

                                </div>
                            ))
                        }
                    </div>
                    : <h3>Loading...</h3>
            }

        </div>
    )
}
