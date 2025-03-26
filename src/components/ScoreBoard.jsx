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
            <div className={playersTurn == 'x'? "has-text-danger has-text-weight-bold": ""}><p>Player 1:  {player1Score}</p></div>
            <div className={playersTurn == 'o'? "has-text-danger has-text-weight-bold": ""}><p>Player 2: {player2Score}</p></div>
            <div><p>Draws: {draws}</p></div>
        </div>
    )
}

export default ScoreBoard;