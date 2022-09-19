const Coords = (row, column) => {
  return { row, column };
}

class Ship {
  constructor(length, headCoords, orientation, sunk = false) {
    this.length = length;
    this.headCoords = headCoords;
    this.orientation = orientation;
    this.sunk = sunk;
  }

  hit(coords) {
    if (this.orientation === 'horizontal') {
      if (coords.row == this.headCoords.row) {
        if (coords.column <= this.headCoords.column &&
          coords.column >= (this.headCoords.column + 1 - this.length)) {
          return true;
        }
      }
    }
    if (this.orientation === 'vertical') {
      if (coords.column == this.headCoords.column) {
        if (coords.row >= this.headCoords.row &&
          coords.row <= (this.length + this.headCoords.row - 1)) {
          return true;
        }
      }
    }
    return false;
  }
}

// const testShip = new Ship(6, Coords(6, 6), 'horizontal');
// console.log(testShip.hit(Coords(6, 3))); // export { Coords, Ship };
export { Coords, Ship };
