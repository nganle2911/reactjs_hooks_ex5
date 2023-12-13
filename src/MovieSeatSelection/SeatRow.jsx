import React from 'react'
import { useSelector } from 'react-redux';
import { seatArr } from './data/data';

export default function SeatRow() {

    const seatList = seatArr;
    console.log("seatList", seatList);
    const arrSelectedSeat = useSelector(state => state.movieSeatReducer.selectedSeatArr);
    console.log("arrSelectedSeat", arrSelectedSeat);

    // TODO: Render seat chart
    const renderSeat = () => {
        return seatList.map((seatRow, index) => {
            // Print the first row of seatList (includes number)
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

            // Print rows of seats (include seats)
            return <div className='seat__row' key={index}>
                <div className='seat__item'>{seatRow.hang}</div>
                {seatRow.danhSachGhe.map((seat, indexSeat) => {
                    let cssStatusSeat = "";
                    let disabled = "";

                    // seat's status is reserved => display red color 
                    if (seat.daDat) {
                        cssStatusSeat = "reserved";
                        disabled = "disabled";
                    }

                    {/* check seat's status => findIndex
                        - if seatClicked existed in arrSelectedSeat => remove
                        - if seatClicked doesn't exist in arrSelectedSeat => push */}
                    let indexSeatSelected = arrSelectedSeat.findIndex((seatClicked) => {
                        return seatClicked.soGhe === seat.soGhe;
                    }); 
                    if (indexSeatSelected !== -1) {
                        cssStatusSeat = "selected";
                    }


                    return <div className={`seat__item seatCustom ${cssStatusSeat} ${disabled}`} key={indexSeat} onClick={() => {
                        
                    }}>
                        <span className='seat__value' style={{ display: "none" }}>{seat.soGhe.substr(1)}</span>
                    </div>
                })}
            </div>
        })
    };


    return (
        <>
            <p className='app__subTitle' id='notiSeat' style={{ display: "none" }}>please select your seat !</p>
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
                    {renderSeat()}

                    <div className='btnCustom btnConfirm'>
                        <button className='btn btn-light'>confirm</button>
                    </div>
                </div>
            </div>
        </>
    )
}
