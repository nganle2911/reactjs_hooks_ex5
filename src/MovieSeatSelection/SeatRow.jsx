import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { seatArr } from './data/data';
import { setConfirmSelection, setSelectedSeatArr } from './redux/reducers/movieSeatSlice';
import { cloneDeep } from 'lodash';

export default function SeatRow() {

    let [seatList, setSeatList] = useState(seatArr);
    let arrSelectedSeat = useSelector(state => state.movieSeatReducer.selectedSeatArr);
    const dispatch = useDispatch();

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

                    let cssSelectingSeatStatus = "";
                    let indexSelectingSeat = arrSelectedSeat.findIndex((selectingSeat) => {
                        return selectingSeat.soGhe === seat.soGhe;
                    });
                    if (indexSelectingSeat !== -1) {
                        cssSelectingSeatStatus = "selected";
                    }

                    return <div className={`seat__item seatCustom ${cssStatusSeat} ${disabled} ${cssSelectingSeatStatus}`} key={indexSeat} onClick={() => {
                        handleSelectedSeat(seat);
                    }}>
                        <span className='seat__value' style={{ display: "none" }}>{seat.soGhe.substr(1)}</span>
                    </div>
                })}
            </div>
        })
    };

    // TODO: Handle selected seat
    let handleSelectedSeat = (selectedSeat) => {
        let newSelectedSeatArr = [...arrSelectedSeat];
        let indexSelectedSeat = arrSelectedSeat.findIndex((seatSelecting) => {
            return seatSelecting.soGhe === selectedSeat.soGhe;
        });

        if (indexSelectedSeat !== -1) {
            newSelectedSeatArr.splice(indexSelectedSeat, 1);
        } else {
            newSelectedSeatArr.push(selectedSeat);
        }

        dispatch(setSelectedSeatArr(newSelectedSeatArr));

        arrSelectedSeat = newSelectedSeatArr;
        return [...arrSelectedSeat];
    }

    // TODO: Handle confirm seat selection
    let handleConfirmButton = () => {
        let newSeatSelectedArr = cloneDeep(arrSelectedSeat);
        let newSeatList = [...seatList];

        for (let i = 0; i < newSeatSelectedArr.length; i++) {
            let status = true;
            newSeatSelectedArr[i].daDat = status;
        }

        newSeatList = newSeatList.map((row) => {
            let updatedSeats = row.danhSachGhe.map((seat) => {
                let updatedSeatIndex = newSeatSelectedArr.findIndex((selectedSeat) => {
                    return selectedSeat.soGhe === seat.soGhe;
                });

                if (updatedSeatIndex !== -1) {
                    return newSeatSelectedArr[updatedSeatIndex];
                }

                return seat;
            })

            return { ...row, danhSachGhe: updatedSeats };
        });

        setSeatList(newSeatList);
        dispatch(setConfirmSelection(newSeatList));

        document.getElementById("notiConfirm").style.display = "block";
    }

    // TODO: Render confirmation form
    let renderConfirmForm = (selectedSeats) => {
        let totalAmount = 0; 
        let seatElements = selectedSeats.map((seat, index) => {
            totalAmount += seat.gia; 
            return (
                <tr key={index}>
                    <td>{seat.soGhe}</td>
                    <td>{seat.gia}</td>
                </tr>
            );
        });

        return {seatElements, totalAmount}
    }


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
                        <button className='btn btn-light' onClick={() => {
                            handleConfirmButton();
                        }}>confirm</button>
                    </div>
                </div>
            </div>

            <div className='seatConfirm' id='notiConfirm' style={{display: "none"}}>
                <h3 className='app__subTitle' style={{display: "inline-block"}}>Your Seats Selection</h3>
                <h4>
                    Numbers of seat that you chose: 
                    <span className='app__textCustom text-warning mx-2'>{arrSelectedSeat.length}</span>
                </h4>
                <table className='table'>
                    <tr>
                        <th>seat</th>
                        <th>price</th>
                    </tr>
                    {renderConfirmForm(arrSelectedSeat).seatElements}
                    <tr>
                        <th>total amount</th>
                        <th>{renderConfirmForm(arrSelectedSeat).totalAmount}</th>
                    </tr>
                </table>
            </div>
        </>
    )
}
