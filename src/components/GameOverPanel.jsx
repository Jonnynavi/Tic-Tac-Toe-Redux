import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../store';

function GameOverPanel(){
    const winner = useSelector(state => state.game.winner);
    const dispatch = useDispatch();
    const handlePlayAgain = () => {
        dispatch(reset());
    }

    return ReactDOM.createPortal(
        <div className="game-over-panel">
            <div className="box">
                <h1 className='is-capitalized'>{winner == 'Draw' ? "Draw!" : `Player ${winner} Wins!`}</h1>
                <hr/>
                <button className='button' onClick={handlePlayAgain}>Play Again?</button>
            </div>
        </div>,
        document.querySelector('.modal-container')
    );
}

export default GameOverPanel;