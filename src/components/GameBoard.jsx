import GamePiece from "./gamePiece";
import { useSelector, useDispatch } from "react-redux";
import { playersAction } from "../store";


function GameBoard(){
    const dispatch = useDispatch();
    const board = useSelector(state => state.game.board);

    const handleClick = (index) => {
        dispatch(playersAction(index));
    }

    const renderBoard = () => {
        return board.map((boardPiece,index) => {
            return <div onClick={() => handleClick(index)} key={index}>{boardPiece && <GamePiece player={boardPiece}/>}</div>
        })
    }
    return(
        <div className="box game-board">
            {renderBoard()}
        </div>
    )
}

export default GameBoard;