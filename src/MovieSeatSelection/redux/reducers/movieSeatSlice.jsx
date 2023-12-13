import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo: {
      username: "",
      numOfSeat: ""
    },
    selectedSeatArr: []
}

const movieSeatSlice = createSlice({
  name: "movieSeatSlice",
  initialState,
  reducers: {
    // todo: update state userInfo
    setUserInfo: (state, action) => {
      const {name, value} = action.payload;
      return {
        ...state,
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
    
    
  }
});

export const { setUserInfo, resetForm } = movieSeatSlice.actions;
export default movieSeatSlice.reducer;