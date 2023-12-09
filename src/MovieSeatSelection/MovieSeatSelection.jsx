import React from 'react';
import "./assets/css/style.css";
import UserInfo from './UserInfo';
import SeatSelection from './SeatSelection';

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
                    <div className='seatChart'>
                        <SeatSelection />
                    </div>
                </div>
            </div>
        </div>
    )
}
