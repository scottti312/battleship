import { Board } from './board.js';
import { Ship } from './ship.js';
import Coords from './coords.js';

class Player {
  constructor() {
    this.board = new Board();
  }

  computerPlaceShip(length) {
    let positionArr = this.generateRandomCoord();
    let position = Coords(positionArr[0], positionArr[1]);
    let orientation = this.randomOrientation();

    while ((orientation == 'vertical' && position[0] > (9 - length)) ||
      (orientation == 'horizontal' && position[1] < length) ||
      (this.board.board[position.row][position.column] > 1)) {
      positionArr = this.generateRandomCoord();
      position = Coords(positionArr[0], positionArr[1]);
    }

    let ship = new Ship(length, position, orientation);
    this.board.placeShip(ship);
  }

  computerPlaceShips() {
    for (let i = 2; i < 6; i++) {
      this.computerPlaceShip(i);
    }
    return true;
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
    let orientation = Math.floor(Math.random());
    if (orientation == 1) {
      return 'horizontal';
    }
    return 'vertical';
  }
}

export { Player };
