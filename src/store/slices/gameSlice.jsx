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