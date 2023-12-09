import React from 'react'
import { useSelector } from 'react-redux'

export default function Seat() {
    let seatList = useSelector(state => state.movieSeatReducer.seatArr);
    console.log("seatList", seatList);

    // TODO: Render seat chart
    const renderSeatChart = () => {
        return seatList.map((seatRow, index) => {
            // Print the first row
            if (seatRow.hang === "") {
                return <div className='seat__row'>
                    <div className='seat__item'>{seatRow.hang}</div>
                    {seatRow.danhSachGhe.map((seat, indexSeat) => {
                        return <div className='seat__item' key={indexSeat}>{seat.soGhe}</div>
                    })}
                </div>
            }

            return <div className='seat__row'>
                <div className='seat__item'>{seatRow.hang}</div>
                {seatRow.danhSachGhe.map((seat, indexSeat) => {
                    return <div className='seat__item seatCustom' key={indexSeat}>{seat.soGhe.substr(1)}</div>
                })}
            </div>
        })
    }

    return (
        <>
            {renderSeatChart()}
        </>
    )
}
