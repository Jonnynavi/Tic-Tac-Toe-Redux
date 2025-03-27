# Tic-Tac-Toe with Redux
## Website
https://jonnynavi.github.io/Tic-Tac-Toe-Redux/
## Overview
This is a simple Tic-Tac-Toe game built using **React** and **Redux Toolkit** for state management. The game allows two players to take turns marking spaces on a 3x3 grid until a player wins or the game ends in a draw. Scores are tracked across multiple rounds.

## Features
- **State Management**: Utilizes Redux Toolkit to handle game logic and scoring.
- **Turn-Based Gameplay**: Players alternate turns until a win or draw is determined.
- **Game Over Panel**: Displays the winner or a draw message and allows for a new game to start.
- **Score Tracking**: Keeps track of wins for both players and total draws.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/tic-tac-toe-redux.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tic-tac-toe-redux
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Usage
- Click on an empty cell to place your mark (X or O).
- The game will check for a winner or a draw after each move.
- The game ends when a player wins or the board is full.
- Click the **Play Again** button to reset the board and continue playing.

## Project Structure
```
📂 tic-tac-toe-redux
├── 📂 src
│   ├── 📂 components
│   │   ├── GameBoard.js  # Displays the tic-tac-toe board
│   │   ├── GamePiece.js  # Renders the X or O piece
│   │   ├── GameOverPanel.js  # Displays winner or draw message
│   │   ├── ScoreBoard.js  # Tracks and displays scores
│   ├── 📂 store
│   │   ├── gameSlice.js  # Handles game logic and state
│   │   ├── playersSlice.js  # Manages player scores
│   │   ├── store.js  # Configures Redux store
│   ├── App.js  # Main application component
│   ├── index.js  # Entry point
│
├── package.json
├── README.md
```

## Redux Store
The application state is managed using Redux Toolkit, with two slices:

### `gameSlice.js`
- Manages the game board, current player, and win conditions.
- Handles move actions and checks for game completion.

### `playersSlice.js`
- Keeps track of player scores and draws.
- Updates scores after each round.

## Dependencies
- **React**
- **Redux Toolkit**
- **React Redux**
- **ReactDOM**
