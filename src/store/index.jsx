import { configureStore } from "@reduxjs/toolkit";
import { playersReducer, updateScore } from "./slices/playersSlice";
import { gameReducer, playersAction } from "./slices/gameSlice";

const store = configureStore({
    reducer: {
        players: playersReducer,
        game: gameReducer
    },
});

export { store, updateScore, playersAction }