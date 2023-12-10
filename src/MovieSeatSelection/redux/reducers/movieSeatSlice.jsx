import { createSlice } from '@reduxjs/toolkit'
import { seatArr } from '../../utils/data';

const initialState = {
    seatArr: seatArr,
    userInfo: {
      username: "",
      numOfSeat: ""
    },
    seat: null
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
    },
    // todo: get id of seat
    setSeat: (state, action) => {
      // To find index of seat in array 2D
      
    }
  }
});

export const { setUserInfo, resetForm,  } = movieSeatSlice.actions;
export default movieSeatSlice.reducer;