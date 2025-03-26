import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import GameOverPanel from "./components/GameOverPanel";
import { useSelector } from "react-redux";

function App(){
    const gameOver = useSelector(state => state.game.gameOver);
    return(
        <div className="app">
            <GameBoard/>
            <ScoreBoard />    
            {gameOver && <GameOverPanel />}       
        </div>
    )
}

export default App;