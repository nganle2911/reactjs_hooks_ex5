import { createSlice } from '@reduxjs/toolkit'
import { seatArr } from '../../data/data';

const initialState = {
    selectedSeatArr: [],
    seatList: seatArr
}

const movieSeatSlice = createSlice({
  name: "movieSeatSlice",
  initialState,
  reducers: {
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

export const { setSelectedSeatArr, setConfirmSelection } = movieSeatSlice.actions;
export default movieSeatSlice.reducer;