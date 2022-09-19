const Coords = (row, column) => {
  return { row, column };
}

class Ship {
  constructor(length, headCoords, orientation, sunk = false) {
    this.length = length;
    this.headCoords = headCoords;
    this.hits = new Array(length).fill(0);
    this.orientation = orientation;
    this.sunk = sunk;
  }

  hit(coords) {
    if (this.orientation === 'horizontal') {
      if (coords.row == this.headCoords.row) {
        if (coords.column <= this.headCoords.column &&
          coords.column >= (this.headCoords.column + 1 - this.length)) {
          this.addToHits(coords);
          return true;
        }
      }
    }
    if (this.orientation === 'vertical') {
      if (coords.column == this.headCoords.column) {
        if (coords.row >= this.headCoords.row &&
          coords.row <= (this.length + this.headCoords.row - 1)) {
          this.addToHits(coords);
          return true;
        }
      }
    }
    return false;
  }

  addToHits(coords) {
    if (this.orientation === 'horizontal')
      this.hits[this.headCoords.column - coords.column] = 1;
    if (this.orientation === 'vertical')
      this.hits[coords.row - this.headCoords.row] = 1;
  }
}
export { Coords, Ship };
