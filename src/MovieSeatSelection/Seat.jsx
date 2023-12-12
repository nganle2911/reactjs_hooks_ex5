import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSeat } from './redux/reducers/movieSeatSlice';

export default function Seat() {
    // hooks 
    const seatList = useSelector(state => state.movieSeatReducer.seatArr);
    console.log(seatList);
    const selectedSeat = useSelector(state => state.movieSeatReducer.seat);
    console.log("selectedSeat - useSelector", selectedSeat);
    const statusSeat = useSelector(state => state.movieSeatReducer.statusSeat);
    console.log("statusSeat - useSelector", statusSeat);
    const dispatch = useDispatch();

    // TODO: Handle seat selection
    const handleSeat = (seatSelected, status) => {
        console.log("seatSelected & status -  handleSeat", seatSelected, status);
        dispatch(setSeat(seatSelected, status));
    }


    // TODO: Render seat chart
    const renderSeat = () => {
        return seatList.map((seatRow, index) => {
            // Print the first row
            if (seatRow.hang === "") {
                return <div className='seat__row' key={index}>
                    <div className='seat__item'>{seatRow.hang}</div>
                    {seatRow.danhSachGhe.map((seat, indexSeat) => {
                        return <div className='seat__item' key={indexSeat}>
                            <span className='seat__value'>{seat.soGhe}</span>
                        </div>
                    })}
                </div>
            }

            return <div className='seat__row' key={index}>
                <div className='seat__item'>{seatRow.hang}</div>
                {seatRow.danhSachGhe.map((seat, indexSeat) => {
                    const isSeatSelected = !seat.daDat;

                    return <div className="seat__item seatCustom" key={indexSeat} onClick={() => {
                        handleSeat(seat, isSeatSelected);
                        console.log(seat, isSeatSelected)
                    }}>
                        <span className='seat__value' style={{ display: "none" }}>{seat.soGhe.substr(1)}</span>
                    </div>
                })}
            </div>
        })
    };

    return (
        <>
            {renderSeat()}
        </>
    )
}
