import { configureStore } from "@reduxjs/toolkit";
import movieSeatSlice from "./reducers/movieSeatSlice";

export const store = configureStore({
    reducer: {
        movieSeatReducer: movieSeatSlice
    }
});