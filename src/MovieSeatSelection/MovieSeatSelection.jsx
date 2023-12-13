import React from 'react';
import "./assets/css/style.css";
import UserInfo from './UserInfo';
import SeatConfirm from './SeatConfirm';
import SeatRow from './SeatRow';

export default function MovieSeatSelection() {
    return (
        <div className='seatSelectionApp'>
            <div className='container'>
                <h1 className='app__title'>movie seat selection app</h1>
                <div className='appContent'>
                    <div className='userInfo py-5'>
                        <UserInfo />
                    </div>
                    <hr />
                    <div className='seatSelection'>
                        <SeatRow />
                    </div>
                    <div className='seatConfirm'>
                        <SeatConfirm />
                    </div>
                </div>
            </div>
        </div>
    )
}
