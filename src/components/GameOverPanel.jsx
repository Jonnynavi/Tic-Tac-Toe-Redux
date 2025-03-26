import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

function GameOverPanel(){
    const winner = useSelector(state => state.game.winner);
    return ReactDOM.createPortal(
        <div className="game-over-panel">
            <div className="box">
                <h1>Player {winner} Wins!</h1>
            </div>
        </div>,
        document.querySelector('.modal-container')
    );
}

export default GameOverPanel;