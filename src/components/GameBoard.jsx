import GamePiece from "./gamePiece";
import { useSelector } from "react-redux";


function GameBoard(){
    const board = useSelector(state => state.game.board);

    const renderBoard = () => {
        return board.map((boardPiece,index) => {
            return <div key={index}>{boardPiece && <GamePiece player={boardPiece}/>}</div>
        })
    }
    return(
        <div className="box game-board">
            {renderBoard()}
        </div>
    )
}

export default GameBoard;