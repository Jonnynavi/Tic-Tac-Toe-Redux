import { createSlice } from "@reduxjs/toolkit";

const playersSlice = createSlice({
    name: "players",
    initialState: {
        player1: 0,
        player2: 0,
        draws: 0,
    },
    reducers: {
        updateScore(state, action){
            switch(action.payload){
                case player1:
                    state.player1 += 1
                    break;
                case player2:
                    state.player2 += 1
                    break;
                default:
                    state.draws += 1 
            };
        },
    },
});

export const { updateScore } = playersSlice.actions;
export const playersReducer = playersSlice.reducer;