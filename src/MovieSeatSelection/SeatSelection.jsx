import React from 'react'
import Seat from './Seat'

export default function SeatSelection() {
    return (
        <>
            <p className='app__subTitle'>please select your seat !</p>
            <div className='seat__note'>
                <div className='note__item'>
                    <p className='app__text empty'>empty seat</p>
                </div>
                <div className='note__item'>
                    <p className='app__text selected'>selected seat</p>
                </div>
                <div className='note__item'>
                    <p className='app__text reserved'>reserved seat</p>
                </div>
            </div>
            <div className='seat__chart'>
                <div className='seat__screen'>
                    <p className='app__text'>screen</p>
                </div>
                <div className='seat__display'>
                    <Seat />
                    <div className='btnCustom btnConfirm'>
                        <button className='btn btn-light'>confirm</button>
                    </div>
                </div>
            </div>
        </>
    )
}
