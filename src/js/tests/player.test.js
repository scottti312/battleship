import { Player } from '../game/player';
import { Ship } from '../game/ship';
import Coords from '../game/coords';

test('Place ship', () => {
  let testPlayer = new Player();
  let testShip = new Ship(4, Coords(6, 6), 'horizontal');
  testPlayer.board.placeShip(testShip);
  expect(testPlayer.board.board).toStrictEqual([
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

// test('Random attack one place left', () => {
//   let testPlayer = new Player();
//   let board = [[3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//   [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//   [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//   [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//   [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//   [3, 3, 3, 3, 3, 1, 3, 3, 3, 3],  // there is a ship at [6, 6] here
//   [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//   [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//   [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//   [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]];
//   testPlayer.board.board = board;
//   testPlayer.computerAttack();
//   expect(testPlayer.board.board).toStrictEqual(
//     [[3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//     [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//     [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//     [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//     [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//     [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//     [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//     [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//     [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
//     [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]]);
// });

test('Computer place random ships', () => {
  let testPlayer = new Player();
  expect(testPlayer.computerPlaceShips()).toBe(true);
  console.log(testPlayer.board.ships);
  console.log(testPlayer.board.board);
});

test('Computer attacks all coords', () => {
  let testPlayer = new Player();
  for (let i = 0; i < 100; i++)
    testPlayer.computerAttack();
  expect(testPlayer.board.board).toStrictEqual(
    [[3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]]);
});
