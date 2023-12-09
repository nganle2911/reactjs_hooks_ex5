import React from 'react'

export default function UserInfo() {
  return (
    <>
        <h3 className='app__subTitle'>user's info</h3>
        <div className='user__inputGroup'>
            <div className='user__input'>
                <p className='app__text'>
                    name: 
                    <span> *</span>
                </p>
                <input type='text' name='Name' id='fName' />
            </div>
            <div className='user__input'>
                <p className='app__text'>
                    number of seats:  
                    <span> *</span>
                </p>
                <input type='number' name='Seat' id='fSeat' min={1} max={200} />
            </div>
        </div>
        <p className='app__text'>
            <span>* </span>
            Please fill required fields
        </p>
        <div className='btnCustom btnSelect'>
            <button className='btn btn-light'>seat selection</button>
        </div>
    </>
  )
}
