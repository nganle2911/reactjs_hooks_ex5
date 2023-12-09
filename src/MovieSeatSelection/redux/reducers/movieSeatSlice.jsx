import { createSlice } from '@reduxjs/toolkit'
import { seatArr } from '../../utils/data';

const initialState = {
    seatArr: seatArr,
    nameUser: "",
    numOfSeat: 0
}

const movieSeatSlice = createSlice({
  name: "movieSeatSlice",
  initialState,
  reducers: {}
});

export const {} = movieSeatSlice.actions

export default movieSeatSlice.reducer