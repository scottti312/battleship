import Player from '../game/player';
import Ship from '../game/ship';
import Coords from '../game/coords';

class Display {
  constructor() {
    this.player = new Player();
    this.orientation = 'horizontal';
    this.currentShipLength = 5;
  }

  loadBoards() {
    let playerBoard = document.querySelector('.player-board');
    let cpuBoard = document.querySelector('.cpu-board');
    this.generateCells(playerBoard, true);
    this.generateCells(cpuBoard, false);

    this.player.computerPlaceShips();
  }

  generateCells(board, playerBoardBool) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let cell = document.createElement('div');
        cell.className = `${i}${j} cell`;
        if (playerBoardBool) {
          this.hoverShip(cell);
        }
        board.appendChild(cell);
      }
    }
  }

  destroyCells(board) {
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }
  }

  hoverShip(cell) {
    if (this.orientation == 'horizontal') {
      cell.addEventListener('mouseover', (e) => {
        let column = e.target.classList[0][1];
        let row = e.target.classList[0][0];
        for (let i = column; i > parseInt(column) - parseInt(this.currentShipLength); i--) {
          let cellsToBeHighlighted;
          try {
            cellsToBeHighlighted = document.getElementsByClassName(`${row}${i}`)[0];
            cellsToBeHighlighted.setAttribute('style', 'background-color: purple');
          } catch (TypeError) { };
        }
      }, false);
      cell.addEventListener('mouseout', (e) => {
        let column = e.target.classList[0][1];
        let row = e.target.classList[0][0];
        for (let i = column; i > parseInt(column) - parseInt(this.currentShipLength); i--) {
          let cellsToBeErased;
          try {
            cellsToBeErased = document.getElementsByClassName(`${row}${i}`)[0];
            cellsToBeErased.setAttribute('style', '');
          } catch (TypeError) { };
        }
      }, false);
    }

    if (this.orientation == 'vertical') {
      cell.addEventListener('mouseover', (e) => {
        let column = e.target.classList[0][1];
        let row = e.target.classList[0][0];
        console.log(row + this.currentShipLength);
        for (let i = row; i < parseInt(row) + parseInt(this.currentShipLength); i++) {
          let cellsToBeHighlighted;
          try {
            cellsToBeHighlighted = document.getElementsByClassName(`${i}${column}`)[0];
            cellsToBeHighlighted.setAttribute('style', 'background-color: purple');
          } catch (TypeError) { };
        }
      }, false);
      cell.addEventListener('mouseout', (e) => {
        let column = e.target.classList[0][1];
        let row = e.target.classList[0][0];
        for (let i = row; i < parseInt(row) + parseInt(this.currentShipLength); i++) {
          let cellsToBeErased;
          try {
            cellsToBeErased = document.getElementsByClassName(`${i}${column}`)[0];
            cellsToBeErased.setAttribute('style', '');
          } catch (TypeError) { };
        }
      }, false);
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
        if (this.player.board.board[i][j] == 1) {
          currentCell.setAttribute('style', 'background-color: black');
        }
      }
    }
  }

  playerPlaceShip(length, rawCoords) {
    let coords = new Coords(rawCoords[0], rawCoords[1]);
    let thisShip = new Ship(length, coords, this.orientation);
    this.currentShipLength--;
    this.player.board.placeShip(thisShip);
  }

}
export default Display;
