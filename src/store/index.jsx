import { configureStore } from "@reduxjs/toolkit";
import { playersReducer, updateScore } from "./slices/playersSlice";

const store = configureStore({
    reducer: {
        players: playersReducer,
    },
});

export { store, updateScore }