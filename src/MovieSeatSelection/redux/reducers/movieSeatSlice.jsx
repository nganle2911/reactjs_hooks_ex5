import { createSlice } from '@reduxjs/toolkit'
import { seatArr } from '../../utils/data';

const initialState = {
    seatArr: seatArr,
    userInfo: {
      username: "",
      numOfSeat: ""
    }
}

const movieSeatSlice = createSlice({
  name: "movieSeatSlice",
  initialState,
  reducers: {
    // todo: update state userInfo
    setUserInfo: (state, action) => {
      const {name, value} = action.payload;
      return {
        ...state, // spread the whole state
        userInfo: {
          ...state.userInfo,
          [name]: value
        }
      }
    },
    // todo: reset form
    resetForm: (state) => {
      return initialState;
    }
  }
});

export const { setUserInfo, resetForm } = movieSeatSlice.actions;
export default movieSeatSlice.reducer;