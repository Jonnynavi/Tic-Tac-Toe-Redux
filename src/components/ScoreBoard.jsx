import { useDispatch, useSelector } from "react-redux";
import { updateScore } from "../store";
import { useEffect } from "react";

function ScoreBoard(){
    const player1Score = useSelector(state => state.players.player1);
    const player2Score = useSelector(state => state.players.player2);
    const draws = useSelector(state => state.players.draws);
    const gameOver = useSelector(state => state.game.gameOver);
    const winner = useSelector(state => state.game.winner);
    const playersTurn = useSelector(state => state.game.currentPlayer);
    const dispatch = useDispatch();

    useEffect(() => {
        if(gameOver){
            dispatch(updateScore(winner));
        }
    }, [winner, gameOver])
    

    return(
        <div className="box score-board">
            <div className={playersTurn == 'x'? "has-text-danger": ""}>Player 1: {player1Score}</div>
            <div className={playersTurn == 'o'? "has-text-danger": ""}>Player 2: {player2Score}</div>
            <div>Draws: {draws}</div>
        </div>
    )
}

export default ScoreBoard;