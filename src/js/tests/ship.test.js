import { Coords, Ship } from '../game/ship';

test('Hit horizontal edges', () => {
  let length = 5;
  let row = 6;
  let column = 6;
  let testShip = new Ship(length, Coords(row, column), 'horizontal');
  expect(testShip.hit(Coords(6, 2))).toBe(true);
  expect(testShip.hit(Coords(6, 6))).toBe(true);
  expect(testShip.isSunk()).toBe(false);
});

test('Hit horizontal edges registered', () => {
  let length = 5;
  let row = 6;
  let column = 6;
  let testShip = new Ship(length, Coords(row, column), 'horizontal');
  testShip.hit(Coords(6, 2));
  testShip.hit(Coords(6, 6));
  expect(testShip.hits).toEqual([1, 0, 0, 0, 1]);
})

test('Sink horizontal ship', () => {
  let length = 5;
  let row = 6;
  let column = 6;
  let testShip = new Ship(length, Coords(row, column), 'horizontal');
  testShip.hit(Coords(6, 2));
  testShip.hit(Coords(6, 3));
  testShip.hit(Coords(6, 4));
  testShip.hit(Coords(6, 5));
  testShip.hit(Coords(6, 6));
  expect(testShip.isSunk()).toBe(true);
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
  expect(testShip.isSunk()).toBe(false);
});

test('Miss horizontal edges not registered', () => {
  let length = 5;
  let row = 6;
  let column = 6;
  let testShip = new Ship(length, Coords(row, column), 'horizontal');
  testShip.hit(Coords(6, 1));
  testShip.hit(Coords(6, 7));
  testShip.hit(Coords(5, 3));
  testShip.hit(Coords(7, 4));
  expect(testShip.hits).toEqual([0, 0, 0, 0, 0]);
});


test('Hit vertical edges', () => {
  let length = 4;
  let row = 2;
  let column = 2;
  let testShip = new Ship(length, Coords(row, column), 'vertical');
  expect(testShip.hit(Coords(2, 2))).toBe(true);
  expect(testShip.hit(Coords(5, 2))).toBe(true);
  expect(testShip.isSunk()).toBe(false);
});

test('Hit vertical edges registered', () => {
  let length = 4;
  let row = 2;
  let column = 2;
  let testShip = new Ship(length, Coords(row, column), 'vertical');
  testShip.hit(Coords(2, 2));
  testShip.hit(Coords(5, 2));
  expect(testShip.hits).toEqual([1, 0, 0, 1]);
});

test('Sink vertical ship', () => {
  let length = 4;
  let row = 2;
  let column = 2;
  let testShip = new Ship(length, Coords(row, column), 'vertical');
  testShip.hit(Coords(2, 2));
  testShip.hit(Coords(3, 2));
  testShip.hit(Coords(4, 2));
  testShip.hit(Coords(5, 2));
  expect(testShip.isSunk()).toBe(true);
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
  expect(testShip.isSunk()).toBe(false);
});

test('Miss vertical edges not registered', () => {
  let length = 4;
  let row = 2;
  let column = 2;
  let testShip = new Ship(length, Coords(row, column), 'vertical');
  testShip.hit(Coords(1, 2));
  testShip.hit(Coords(6, 2));
  testShip.hit(Coords(4, 3));
  testShip.hit(Coords(3, 1));
  expect(testShip.hits).toEqual([0, 0, 0, 0]);
});

