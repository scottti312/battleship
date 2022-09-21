import { Board } from './board.js';
import Coords from './coords.js';

class Player {
  constructor() {
    this.whatever = 0;
    this.board = new Board();
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
}

export { Player };
