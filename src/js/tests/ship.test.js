import { Coords, Ship } from '../game/ship';

test('Hit horizontal edges', () => {
  let length = 5;
  let row = 6;
  let column = 6;
  let testShip = new Ship(length, Coords(row, column), 'horizontal');
  expect(testShip.hit(Coords(6, 3))).toBe(true);
  expect(testShip.hit(Coords(6, 6))).toBe(true);
});

test('Miss horizontal edges', () => {
  let length = 5;
  let row = 6;
  let column = 6;
  let testShip = new Ship(length, Coords(row, column), 'horizontal');
  expect(testShip.hit(Coords(6, 1))).toBe(false);
  expect(testShip.hit(Coords(6, 7))).toBe(false);
  expect(testShip.hit(Coords(5, 3))).toBe(false);
  expect(testShip.hit(Coords(7, 4))).toBe(false);
});


test('Hit vertical edges', () => {
  let length = 4;
  let row = 2;
  let column = 2;
  let testShip = new Ship(length, Coords(row, column), 'vertical');
  expect(testShip.hit(Coords(2, 2))).toBe(true);
  expect(testShip.hit(Coords(5, 2))).toBe(true);
});

test('Miss vertical edges', () => {
  let length = 4;
  let row = 2;
  let column = 2;
  let testShip = new Ship(length, Coords(row, column), 'vertical');
  expect(testShip.hit(Coords(1, 2))).toBe(false);
  expect(testShip.hit(Coords(6, 2))).toBe(false);
  expect(testShip.hit(Coords(4, 3))).toBe(false);
  expect(testShip.hit(Coords(3, 1))).toBe(false);
});


