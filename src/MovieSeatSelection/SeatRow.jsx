import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { seatArr } from './data/data';
import { setConfirmSelection, setSelectedSeatArr } from './redux/reducers/movieSeatSlice';
import { cloneDeep } from 'lodash';

export default function SeatRow() {

    let [seatList, setSeatList] = useState(seatArr);
    console.log("seatList", seatList);
    let arrSelectedSeat = useSelector(state => state.movieSeatReducer.selectedSeatArr);
    console.log("arrSelectedSeat", arrSelectedSeat);
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
        console.log(indexSelectedSeat);

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
        console.log("hello");
        let newSeatSelectedArr = cloneDeep(arrSelectedSeat);
        console.log("newSeatSelectedArr", newSeatSelectedArr);
        let newSeatList = [...seatList];

        for (let i = 0; i < newSeatSelectedArr.length; i++) {
            let status = true;
            newSeatSelectedArr[i].daDat = status;
        }

        console.log("new arr", newSeatSelectedArr);

        newSeatList = newSeatList.map((row) => {
            let updatedSeats = row.danhSachGhe.map((seat) => {
                let updatedSeatIndex = newSeatSelectedArr.findIndex((selectedSeat) => {
                    return selectedSeat.soGhe === seat.soGhe;
                });

                if (updatedSeatIndex !== -1) {
                    console.log("bingo");
                    return newSeatSelectedArr[updatedSeatIndex];
                }

                return seat;
            })

            return { ...row, danhSachGhe: updatedSeats };
        });

        console.log("new updated seatlist", newSeatList);
        setSeatList(newSeatList);
        dispatch(setConfirmSelection(newSeatList));
    }

    // TODO: Render confirmation form
    let renderConfirmForm = () => {
        return arrSelectedSeat.map((seat, index) => {
            
        })
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

            <div className='seatConfirm'>
                <table className='table'>
                    <tr>
                        <th>name</th>
                        <th>number of seats</th>
                        <th>seats</th>
                        <th>total price</th>
                    </tr>

                </table>
            </div>
        </>
    )
}
