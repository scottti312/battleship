import Player from '../game/player';
import Ship from '../game/ship';
import Coords from '../game/coords';

class Display {
  constructor() {
    this.player = new Player();
    this.cpuPlayer = new Player();
    this.orientation = 'horizontal';
    this.currentShipLength = 5;
    this.planningPhase = true;
    this.cheater = false;
    this.gameComplete = false;
  }

  loadBoards() {
    let playerBoard = document.querySelector('.player-board');
    let cpuBoard = document.querySelector('.cpu-board');
    this.generateCells(playerBoard, true);
    this.generateCells(cpuBoard, false);
    this.cpuPlayer.computerPlaceShips();
  }

  generateCells(board, playerBoardBool) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let cell = document.createElement('div');
        cell.className = `${i}${j} cell`;
        if (this.player.board.board[i][j] == 1)
          cell.classList.add('ship-cell');
        if (playerBoardBool && this.planningPhase) {
          this.hoverShip(cell);
          this.clickShip(cell);
        }
        board.appendChild(cell);
      }
    }
  }

  hoverShip(cell) {
    if (this.orientation == 'horizontal') {
      cell.addEventListener('mouseover', (e) => {
        if (this.planningPhase) {
          let column = e.target.classList[0][1];
          let row = e.target.classList[0][0];
          if (!this.player.checkCollide(this.currentShipLength, Coords(parseInt(row), parseInt(column)), this.orientation)) {
            for (let i = column; i > parseInt(column) - parseInt(this.currentShipLength); i--) {
              try {
                let cellsToBeHighlighted = document.getElementsByClassName(`${row}${i}`)[0];
                if (!cellsToBeHighlighted.classList.contains('ship-cell')) {
                  cellsToBeHighlighted.setAttribute('style', 'background-color: #3580c2');
                }
              } catch (TypeError) { };
            }
          }
        }
      }, false);
      cell.addEventListener('mouseout', (e) => {
        if (this.planningPhase) {
          let column = e.target.classList[0][1];
          let row = e.target.classList[0][0];
          for (let i = column; i > parseInt(column) - parseInt(this.currentShipLength); i--) {
            let cellsToBeErased;
            try {
              cellsToBeErased = document.getElementsByClassName(`${row}${i}`)[0];
              cellsToBeErased.setAttribute('style', '');
            } catch (TypeError) { };
          }
        }
      }, false);
    }

    if (this.orientation == 'vertical') {
      cell.addEventListener('mouseover', (e) => {
        if (this.planningPhase) {
          let column = e.target.classList[0][1];
          let row = e.target.classList[0][0];

          if (!this.player.checkCollide(this.currentShipLength, Coords(parseInt(row), parseInt(column)), this.orientation)) {
            for (let i = row; i < parseInt(row) + parseInt(this.currentShipLength); i++) {
              try {
                let cellsToBeHighlighted = document.getElementsByClassName(`${i}${column}`)[0];
                cellsToBeHighlighted.setAttribute('style', 'background-color: #3580c2');
              } catch (TypeError) { };
            }
          }
        }
      }, false);
      cell.addEventListener('mouseout', (e) => {
        if (this.planningPhase) {
          let column = e.target.classList[0][1];
          let row = e.target.classList[0][0];
          for (let i = row; i < parseInt(row) + parseInt(this.currentShipLength); i++) {
            let cellsToBeErased;
            try {
              cellsToBeErased = document.getElementsByClassName(`${i}${column}`)[0];
              cellsToBeErased.setAttribute('style', '');
            } catch (TypeError) { };
          }
        }
      }, false);
    }
  }

  clickShip(cell) {
    if (this.orientation == 'horizontal') {
      cell.addEventListener('click', (e) => {
        if (this.planningPhase) {
          let column = e.target.classList[0][1];
          let row = e.target.classList[0][0];

          let colliding = this.player.checkCollide(this.currentShipLength, Coords(parseInt(row), parseInt(column)), this.orientation);

          if (!(column < this.currentShipLength - 1) &&
            !(this.player.board.board[row][column] > 0) && !colliding) {
            this.playerPlaceShip(row, column);

            for (let i = column; i > parseInt(column) - parseInt(this.currentShipLength) - 1; i--) {
              let cellsToBeHighlighted;
              try {
                cellsToBeHighlighted = document.getElementsByClassName(`${row}${i}`)[0];
                cellsToBeHighlighted.setAttribute('style', 'background-color: #97fe7c');
                cellsToBeHighlighted.classList.add('ship-cell');
              } catch (TypeError) { };
            }
          }
        }
      }, false);
    }
    if (this.orientation == 'vertical') {
      cell.addEventListener('click', (e) => {
        if (this.planningPhase) {
          let column = e.target.classList[0][1];
          let row = e.target.classList[0][0];

          let colliding = this.player.checkCollide(this.length, Coords(parseInt(row), parseInt(column)), this.orientation);
          if (!(this.orientation == 'vertical' && (9 - row) < this.currentShiplength) ||
            !(this.player.board.board[row][column] > 0) || !colliding) {
            this.playerPlaceShip(row, column);

            for (let i = row; i < parseInt(row) + parseInt(this.currentShipLength) + 1; i++) {
              let cellsToBeHighlighted;
              try {
                cellsToBeHighlighted = document.getElementsByClassName(`${i}${column}`)[0];
                cellsToBeHighlighted.setAttribute('style', 'background-color: #97fe7c');
                cellsToBeHighlighted.classList.add('ship-cell');
              } catch (TypeError) { };
            }
          }
        }
      }, false);
    }
  }

  destroyCells(board) {
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }
  }

  rotate() {
    let playerBoard = document.querySelector('.player-board');
    let rotateButton = document.querySelector('.rotate');
    rotateButton.addEventListener('click', () => {
      this.destroyCells(playerBoard);
      this.orientation == 'horizontal' ? this.orientation = 'vertical' : this.orientation = 'horizontal';
      this.generateCells(playerBoard, true);
    });
  }

  cpuDisplayShips() {
    let cpuBoard = document.querySelector('.cpu-board');
    let cell = cpuBoard.getElementsByClassName('cell');
    cell.innerHTML = '0';
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let currentCell = cpuBoard.getElementsByClassName(`${i}${j}`)[0];
        if (this.cpuPlayer.board.board[i][j] == 1) {
          currentCell.setAttribute('style', 'background-color: black');
        }
      }
    }
  }

  attackHover() {
    let cpuBoard = document.querySelector('.cpu-board');
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let currentCell = cpuBoard.getElementsByClassName(`${i}${j}`)[0];
        currentCell.addEventListener('mouseover', () => {
          if (this.cpuPlayer.board.board[i][j] < 2 && !this.gameComplete) {
            currentCell.setAttribute('style', 'background-color: gray; overflow: hidden;');
          }
        })
        currentCell.addEventListener('mouseout', () => {
          if (this.cpuPlayer.board.board[i][j] < 2 && !this.gameComplete && !this.cheater) {
            currentCell.setAttribute('style', '');
          }
          if (this.cpuPlayer.board.board[i][j] == 1 && !this.gameComplete && this.cheater) {
            currentCell.setAttribute('style', 'background-color: black; overflow:hidden;')
          }
          if (this.cpuPlayer.board.board[i][j] == 0 && !this.gameComplete && this.cheater) {
            currentCell.setAttribute('style', '');
          }

        })

      }
    }
  }

  playerPlaceShip(row, column) {
    let coords = Coords(parseInt(row), parseInt(column));
    let thisShip = new Ship(this.currentShipLength, coords, this.orientation);
    this.player.board.placeShip(thisShip);

    this.currentShipLength--;
    if (this.currentShipLength < 2) {
      this.planningPhase = false;
      let container = document.querySelector('.player-board-container');
      container.removeChild(container.querySelector('.rotate'));
      container.setAttribute('style', 'margin-top: 25px');
      this.attackPhase();
    }
  }

  attackPhase() {
    this.attackHover();
    let cpuBoard = document.querySelector('.cpu-board');
    let gameOver = (!this.player.board.allShipsSunk() &&
      !this.cpuPlayer.board.allShipsSunk());
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let currentCell = cpuBoard.getElementsByClassName(`${i}${j}`)[0];
        currentCell.addEventListener('click', (e) => {
          let gameOver = (this.player.board.allShipsSunk() ||
            this.cpuPlayer.board.allShipsSunk());
          if (!gameOver) {
            let board = this.cpuPlayer.board.board;
            if (!(board[i][j] == 2 || board[i][j] == 3)) {
              if (board[i][j] == 1) {
                e.target.setAttribute('style', 'background-color: #fb6a6a');
                this.cpuPlayer.board.receiveAttack(Coords(i, j));
              }
              if (board[i][j] == 0) {
                e.target.setAttribute('style', 'background-color: #a8a8a8');
                this.cpuPlayer.board.receiveAttack(Coords(i, j));
              }
              this.player.computerAttack();
              this.refreshCells();
              if (this.player.board.allShipsSunk() ||
                this.cpuPlayer.board.allShipsSunk()) {
                this.gameComplete = true;
                this.gameOver();
              }
            }
          }
        });
      }
    }
  }

  refreshCells() {
    let playerBoard = document.querySelector('.player-board');
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let currentCell = playerBoard.getElementsByClassName(`${i}${j}`)[0];
        let board = this.player.board.board;
        if (board[i][j] == 3) {
          currentCell.setAttribute('style', 'background-color: #a8a8a8');
        }
        if (board[i][j] == 2) {
          currentCell.setAttribute('style', 'background-color: #fb6a6a');
        }
        if (board[i][j] == 1) {
          currentCell.setAttribute('style', 'background-color: #97fe7c');
        }
      }
    }
  }

  gameOver() {
    let announceWinner = document.querySelector('.announce-winner');
    this.cpuPlayer.board.allShipsSunk() ? announceWinner.innerHTML = 'You win!' : announceWinner.innerHTML = 'You lose!'
    if (!this.cheater && this.cpuPlayer.board.allShipsSunk()) {
      let realWinnerMessage = document.createElement('div');
      realWinnerMessage.innerHTML = 'Without cheating!';
      let container = document.querySelector('.game-container');
      container.appendChild(realWinnerMessage);
    }
    if (this.cheater) {
      let cheaterMessage = document.createElement('div');
      cheaterMessage.innerHTML = 'but u cheated';
      let container = document.querySelector('.game-container');
      container.appendChild(cheaterMessage);
    }
    announceWinner.style.visibility = 'visible';
  }
}
export default Display;
