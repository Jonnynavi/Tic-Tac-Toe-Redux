function GamePiece({player}){
    return(
        <div>{player == 1 ? "x" : "o"}</div>
    )
}

export default GamePiece;