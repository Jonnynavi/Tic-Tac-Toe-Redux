import { useSelector } from "react-redux";

function ScoreBoard(){
    const player1Score = useSelector(state => state.players.player1);
    const player2Score = useSelector(state => state.players.player2);
    const draws = useSelector(state => state.players.draws);

    return(
        <div className="box score-board">
            <div>Player 1: {player1Score}</div>
            <div>Player 2: {player2Score}</div>
            <div>Draws: {draws}</div>
        </div>
    )
}

export default ScoreBoard;