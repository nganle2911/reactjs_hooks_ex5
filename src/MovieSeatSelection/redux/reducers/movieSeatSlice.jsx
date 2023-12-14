import { createSlice } from '@reduxjs/toolkit'
import { seatArr } from '../../data/data';

const initialState = {
    // userInfo: {
    //   username: "alice",
    //   numOfSeat: "2"
    // },
    selectedSeatArr: [],
    seatList: seatArr
}

const movieSeatSlice = createSlice({
  name: "movieSeatSlice",
  initialState,
  reducers: {
    // todo: update state userInfo
    // setUserInfo: (state, action) => {
    //   state.userInfo = action.payload;
    // },

    // todo: reset form
    resetForm: (state) => {
      return initialState;
    },
    
    // todo: handle select seat
    setSelectedSeatArr: (state, action) => {
      state.selectedSeatArr = action.payload;
    },

    // todo: handle confirm seat selection
    setConfirmSelection: (state, action) => {
      state = action.payload
    }
  }
});

export const { resetForm, setSelectedSeatArr, setConfirmSelection } = movieSeatSlice.actions;
export default movieSeatSlice.reducer;