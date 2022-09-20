const Coords = (row, column) => {
  return { row, column };
}

class Ship {
  constructor(length, headCoords, orientation) {
    this.length = length;
    this.headCoords = headCoords;
    this.orientation = orientation;
    this.hits = new Array(length).fill(0);
    this.sunk = false;
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
    // if (this.orientation === 'horizontal')
    //   this.hits[this.headCoords.column - coords.column] = 1;
    if (this.orientation === 'horizontal')
      this.hits[this.length - (this.headCoords.column - coords.column) - 1] = 1;
    if (this.orientation === 'vertical')
      this.hits[coords.row - this.headCoords.row] = 1;
  }

  isSunk() {
    for (let i = 0; i < this.length; i++) {
      if (this.hits[i] == 0)
        return false;
    }
    return true;
  }
}
export { Coords, Ship };
