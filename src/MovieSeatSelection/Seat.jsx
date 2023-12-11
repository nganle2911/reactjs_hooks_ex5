import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSeat } from './redux/reducers/movieSeatSlice';

export default function Seat() {
    const seatList = useSelector(state => state.movieSeatReducer.seatArr);
    console.log(seatList);
    const selectedSeat = useSelector(state => state.movieSeatReducer.seat);
    const dispatch = useDispatch();

    // TODO: Handle seat selection
    const handleSeat = (seatInfo) => {
        dispatch(setSeat(seatInfo));
        console.log(seatInfo);
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
                    const seatInfo = {
                        seatNumber: seat.soGhe
                    };
                    return <div className='seat__item seatCustom' key={indexSeat} onClick={() => {
                        handleSeat(seatInfo);
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
