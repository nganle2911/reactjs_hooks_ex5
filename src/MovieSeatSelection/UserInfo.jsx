import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetForm, setUserInfo } from './redux/reducers/movieSeatSlice';

export default function UserInfo() {

    const userInfo = useSelector(state => state.movieSeatReducer.userInfo);
    const dispatch = useDispatch();

    // TODO: Handle the change of user's information 
    const handleChangeInfo = (e) => {
        const { name, value } = e.target;
        dispatch(setUserInfo({ name, value }));
    };

    // TODO: Handle button seat selection
    const handleButtonSelection = () => {
        if (userInfo.username === "" && userInfo.numOfSeat === "") {
            alert("Please enter your Name and Number of Seats !");
        } else {
            console.log(userInfo);
            document.getElementById("notiSeat").style.display = "inline-block";
        }
    };

    return (
        <>
            <h3 className='app__subTitle'>user's info</h3>
            <div className='user__inputGroup'>
                <div className='user__input'>
                    <p className='app__text'>
                        name:
                        <span> *</span>
                    </p>
                    <input 
                        type='text' 
                        name='username' 
                        id='fName' 
                        onChange={handleChangeInfo} 
                        value={userInfo.username} />
                </div>
                <div className='user__input'>
                    <p className='app__text'>
                        number of seats:
                        <span> *</span>
                    </p>
                    <input 
                        type='number' 
                        name='numOfSeat' 
                        id='fSeat' 
                        min={1} max={200} 
                        onChange={handleChangeInfo} 
                        value={userInfo.numOfSeat} />
                </div>
            </div>
            <p className='app__text'>
                <span>* </span>
                Please fill required fields
            </p>
            <div className='btnCustom btnSelect'>
                <button className='btn btn-light' onClick={handleButtonSelection}>seat selection</button>
            </div>
        </>
    )
}
