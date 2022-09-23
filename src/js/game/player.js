import Board from './board.js';
import Ship from './ship.js';
import Coords from './coords.js';

class Player {
  constructor() {
    this.board = new Board();
  }

  computerPlaceShips() {
    for (let i = 2; i < 6; i++) {
      this.computerPlaceShip(i);
    }
    console.log(this.board.ships);
    return true;
  }

  computerPlaceShip(length) {
    let positionArr = this.generateRandomCoord();
    let position = Coords(positionArr[0], positionArr[1]);
    let orientation = this.randomOrientation();
    let colliding = this.checkCollide(length, position, orientation);

    // Generate new position if headCoords are invalid
    // (Occupied or overlapping length of ship)
    while ((orientation == 'vertical' && (9 - position.row) < length) ||
      (orientation == 'horizontal' && position.column < length) ||
      (this.board.board[position.row][position.column] > 0) ||
      colliding) {
      positionArr = this.generateRandomCoord();
      position = Coords(positionArr[0], positionArr[1]);
      colliding = this.checkCollide(length, position, orientation);
    };

    let ship = new Ship(length, position, orientation);
    this.board.placeShip(ship);
  }

  checkCollide(length, position, orientation) {
    console.log(this.board.ships);
    console.log(`${length}, (${position.row},${position.column}), ${orientation}`);
    let board = this.board.board;
    if (orientation == 'horizontal') {
      if (position.column < length) return true;
      for (let i = position.column; i > position.column - length; i--) {
        if (board[position.row][i] > 0) return true;
      }
    }
    if (orientation == 'vertical') {
      if ((9 - position.row) < length) return true;
      for (let i = position.row; i < position.row + length; i++) {
        if (board[i][position.column] > 0) return true;
      }
    }
    return false;
  }

  checkOnEdge(orientation, position, length) {
    let row = position.row;
    let column = position.column;
    if (orientation == 'horizontal') {
      try {
        if (this.board.board[row][column + 1] == undefined ||
          this.board.board[row][column - length - 1] == undefined ||
          this.board.board[row + 1][column] == undefined ||
          this.board.board[row - 1][column] == undefined)
          return true;
      } catch (TypeError) { return true; }
    }
    if (orientation == 'vertical') {
      try {
        if (this.board.board[row - 1][column] == undefined ||
          this.board.board[row + length + 1][column] == undefined ||
          this.board.board[row][column + 1] == undefined ||
          this.board.board[row][column - 1] == undefined)
          return true;
      } catch (TypeError) { return true; }
    }
    return false;
  }

  computerAttack() {
    let attackCoord = this.generateRandomCoord();
    let attackedCoord = this.board.board[attackCoord[0]][attackCoord[1]];
    if (attackedCoord < 2) {
      this.board.receiveAttack(Coords(attackCoord[0], attackCoord[1]));
      return;
    }
    this.computerAttack();
  }

  generateRandomCoord() {
    let randomX = Math.floor(Math.random() * 10);
    let randomY = Math.floor(Math.random() * 10);
    return [randomX, randomY];
  }

  randomOrientation() {
    let orientation = Math.floor(Math.random() * 2);
    if (orientation == 1) {
      return 'horizontal';
    }
    return 'vertical';
  }
}

export default Player;
