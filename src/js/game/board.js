import { Ship, Coords } from './ship';

class Board {
  constructor() {
    const arr = new Array(10);
    for (let i = 0; i < 10; i++) {
      arr[i] = new Array(10).fill(0);
    }
    this.board = arr;
  }

  placeShip(ship) {
    this.placeShipBoardChange(ship);
  }

  placeShipBoardChange(ship) {
    let row = ship.headCoords.row;
    let column = ship.headCoords.column;
    if (ship.orientation === 'horizontal') {
      for (let i = column - ship.length + 1; i < column + 1; i++) {
        this.board[row][i] = 1;
      }
    }
    if (ship.orientation === 'vertical') {
      for (let i = row; i < row + ship.length; i++) {
        this.board[i][column] = 1;
      }
    }
  }
}

export { Board };
