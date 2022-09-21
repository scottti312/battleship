import { Board } from '../game/board';
import { Ship } from '../game/ship';
import Coords from '../game/coords';

test('Empty 10x10 board created', () => {
  let testBoard = new Board();
  expect(testBoard.board).toStrictEqual([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
});

test('Place horizontal ship', () => {
  let testBoard = new Board();
  let testShip = new Ship(4, Coords(6, 6), 'horizontal');
  testBoard.placeShip(testShip);
  expect(testBoard.board).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
});

test('Place vertical ship', () => {
  let testBoard = new Board();
  let testShip = new Ship(3, Coords(3, 5), 'vertical');
  testBoard.placeShip(testShip);
  expect(testBoard.board).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);

});

test('Hit horizontal ship', () => {
  let testBoard = new Board();
  let testShip = new Ship(5, Coords(7, 8), 'horizontal');
  testBoard.placeShip(testShip);
  testBoard.receiveAttack(Coords(7, 5));
  expect(testBoard.board).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
  expect(testShip.hits).toStrictEqual([0, 1, 0, 0, 0]);
});

test('Miss horizontal ship', () => {
  let testBoard = new Board();
  let testShip = new Ship(5, Coords(7, 8), 'horizontal');
  testBoard.placeShip(testShip);
  testBoard.receiveAttack(Coords(7, 5));
  testBoard.receiveAttack(Coords(6, 4));
  expect(testBoard.board).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
  expect(testShip.hits).toStrictEqual([0, 1, 0, 0, 0]);
});

test('All ships sunk. Game over', () => {
  let testBoard = new Board();

  let testShip = new Ship(5, Coords(7, 8), 'horizontal');
  testBoard.placeShip(testShip);
  let testShip1 = new Ship(4, Coords(3, 1), 'vertical');
  testBoard.placeShip(testShip1);
  let testShip2 = new Ship(3, Coords(2, 5), 'vertical');
  testBoard.placeShip(testShip2);

  for (let i = 4; i <= 8; i++)
    testBoard.receiveAttack(Coords(7, i));
  for (let i = 3; i <= 6; i++)
    testBoard.receiveAttack(Coords(i, 1));
  for (let i = 2; i <= 4; i++)
    testBoard.receiveAttack(Coords(i, 5));

  expect(testBoard.board).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
  expect(testBoard.allShipsSunk()).toBe(true);
});

test('Not all ships sunk. Not game over', () => {
  let testBoard = new Board();

  let testShip = new Ship(5, Coords(7, 8), 'horizontal');
  testBoard.placeShip(testShip);
  let testShip1 = new Ship(4, Coords(3, 1), 'vertical');
  testBoard.placeShip(testShip1);
  let testShip2 = new Ship(3, Coords(2, 5), 'vertical');
  testBoard.placeShip(testShip2);

  for (let i = 4; i <= 8; i++)
    testBoard.receiveAttack(Coords(7, i));
  for (let i = 3; i <= 6; i++)
    testBoard.receiveAttack(Coords(i, 1));
  for (let i = 2; i <= 3; i++)
    testBoard.receiveAttack(Coords(i, 5));

  expect(testBoard.board).toStrictEqual([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
  expect(testBoard.allShipsSunk()).toBe(false);
});
