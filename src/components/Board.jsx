import GamePiece from "./gamePiece";

function Board(){
    return(
        <div className="box game-board">
            <div><GamePiece player={1}/></div>
            <div><GamePiece player={2}/></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Board;