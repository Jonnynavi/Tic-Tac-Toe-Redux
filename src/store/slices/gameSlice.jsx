import { createSlice } from "@reduxjs/toolkit";

const checkGame = (board) =>{
    const winningConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8]
        [0, 4, 8], [2, 4, 6]
    ]
    for (const win of winningConditions){
        const {a, b, c} = win;
        if(board[a] && board[a] == board[b] && board[a] == board[c]){
            return board[a];
        } else if(!board.includes("")){
            return "Draw"
        }
    }
}

const gameSlice = createSlice({
    name: "game",
    initialState: {
        board: ["","","","","","","","",""],
        playersTurn: "x",
        winner: null,
        gameOver: false
    },
    reducers: {
        playersAction(state, action){
            const {position} = action.payload;
            if(!board[position] && !state.gameOver){
                state.board[position] = state.playersTurn;
                switch(checkGame(state.board)){
                    case 'x':
                        state.winner = 'x';
                        state.gameOver = true
                        break;
                    case 'o':
                        state.winner = "o";
                        state.gameOver = true
                        break;
                    case 'Draw':
                        state.winner = "Draw"
                        state.gameOver = true
                        break;
                }
            };

        },
    },
});

export const { playersAction } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;