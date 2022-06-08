import React, { useState } from 'react'
import "./ProductCard.scss"
import {Button} from "../Button/Button";
import { ReactComponent as Star } from "../../assets/star.svg"
import { ReactComponent as Like } from "../../assets/like.svg"
import { ReactComponent as List } from "../../assets/list.svg"
import { ReactComponent as Notif } from "../../assets/notifications-price-alert-alarm.svg"
import { ReactComponent as Info } from "../../assets/info.svg"

export const ProductCard = ({ data, bottomCardType, favIcon = false, saveIcon = false, bellIcon = false, textColor, sponsored, info, info2, info3 }) => {

    const [hover, setHover] = useState(false)
    const [clickEvent, setClickEvent] = useState({})

    const handleClickEvent = (values) => {
        let newVal = values === 'like' ? { like: !clickEvent?.like } : values === 'save' ? { save: !clickEvent?.save } : { bell: !clickEvent?.bell }
        setClickEvent({ ...clickEvent, ...newVal })
    }

    const BottomCardType = () => {
        switch (String(bottomCardType)?.toLocaleLowerCase()) {
            case 'star':
                return (
                    <div className='star-div'>
                        <Star /> <span className='star-bold'> 4,8 </span>
                        <div class="oval-separator"></div>
                        <span className='star-bold'>5</span>  Yorum
                    </div>
                )

            case 'like':
                return (
                    <div className='star-div'>
                        <Like /> <span className='star-bold'> 10 </span> kişi beğendi
                    </div>
                )
            default:
                break;
        }
    }

    let adult = false
    let color = ['siyah', 'yeşil', 'beyaz', 'turuncu', 'siyah']
    return (
        <div className={'card-bg'} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className='div-img'>
                {sponsored && <div className='sponsored-div'><Info className="m-r" /> Sponsorlu ürün</div>}
                {
                    data?.thumbnail ?
                        adult ?
                            <div className='img-adult'>
                                <div className='circle-adult'>18+</div>
                                Bu ürünü görüntülemek ve satın almak için
                                18 yaşını doldurmuş olmanız gerekmektedir.
                            </div>
                            :
                            <img src={data?.thumbnail} alt='' />
                        :
                        <div></div>
                }
                {
                    color?.slice(0, 3).map((x, i) => (
                        <>
                            <span key={i} className={`img-color ${x}`} style={{ left: i * 8 }}></span>
                        </>
                    ))
                }
                {color.length > 3 ? <div className='color-length'> +{color.length - 3}</div> : color.length === 1 && <div className='color-length-1'>{color}</div>}
                {
                    favIcon &&
                    <div className={clickEvent?.like ? 'fav-div click' : 'fav-div'} onClick={() => handleClickEvent('like')}>
                        <Like className={clickEvent?.like ? 'fav-button-click' : 'fav-button'} />
                    </div>
                }
                {
                    saveIcon &&
                    <div className={clickEvent?.save ? 'save-div click' : 'save-div'} onClick={() => handleClickEvent('save')} >
                        <List className={clickEvent?.save ? 'save-button-click' : 'save-button'} />
                    </div>
                }
                {
                    bellIcon &&
                    <div className={clickEvent?.bell ? 'bell-div click' : 'bell-div'} onClick={() => handleClickEvent('bell')}>
                        <Notif className={clickEvent?.bell ? 'bell-button-click' : 'bell-button'} />
                    </div>
                }
                {info && <div className={`info-div-1 ${info}`}>1 Alana 1 bedava</div>}
                {info2 && <div className={`info-div-2 ${info2}`}>1 Alana 1 bedava</div>}
                {info3 && <div className='info-div-3'><Info className="info-svg" /> Farklı seçenekleri var</div>}


            </div>
            <div className='div-text'>
                <span className={`discount-text ${textColor}`}>Sepette %37 indirim </span>

                <span className={`last-price ${textColor}`}>101,69  <span className={`text-style ${textColor}`}>TL</span></span>
                <div> <span className='first-price'>100 TL</span> <span class="discount"> 10% </span> </div>
                {
                    hover ?
                        <div className='card-bottom'>
                            {hover && <Button color="primary" text='Sepete Ekle' />}
                        </div>
                        :
                        <>
                            <div><span>{data?.title} </span></div>
                            {BottomCardType()}
                        </>
                }

            </div>

        </div >
    )
}
