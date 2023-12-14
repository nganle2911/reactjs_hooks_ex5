import React from 'react';
import "./assets/css/style.css";
import SeatRow from './SeatRow';

export default function MovieSeatSelection() {
    return (
        <div className='seatSelectionApp'>
            <div className='container'>
                <h1 className='app__title'>movie seat selection app</h1>
                <div className='appContent'>
                    <hr />
                    <div className='seatSelection'>
                        <SeatRow />
                    </div>
                </div>
            </div>
        </div>
    )
}
