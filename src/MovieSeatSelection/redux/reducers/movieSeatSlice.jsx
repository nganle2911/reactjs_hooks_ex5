import { createSlice } from '@reduxjs/toolkit'
import { seatArr } from '../../utils/data';

const initialState = {
    seatArr: seatArr,
    userInfo: {
      username: "",
      numOfSeat: ""
    },
    seat: null,
    statusSeat: false
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

    // todo: change color seat 
    setSeat: (state, action) => {
      const newSeat = action.payload;
      console.log("newSeat - reducer", newSeat);
      return {
        ...state, 
        statusSeat: !newSeat.daDat,
        seat: {...newSeat, daDat: state.statusSeat}
      }
    }

  }
});

export const { setUserInfo, resetForm, setSeat } = movieSeatSlice.actions;
export default movieSeatSlice.reducer;