import Player from '../game/player';
import Ship from '../game/ship';
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

test('Random attack one place left', () => {
  let testPlayer = new Player();
  let board = [[3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 3, 3, 3, 1, 3, 3, 3, 3],  // there is a ship at [6, 6] here
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]];
  testPlayer.board.board = board;
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

test('Place ships on top of each other vertically', () => {
  let testPlayer = new Player();
  let testShip = new Ship(3, Coords(5, 5), 'vertical');
  testPlayer.board.placeShip(testShip);
  expect(testPlayer.checkCollide(4, Coords(3, 5), 'vertical')).toBe(true);
});

test('Place ships on top of each other horizontal and vertical', () => {
  let testPlayer = new Player();
  let testShip = new Ship(3, Coords(5, 5), 'horizontal');
  testPlayer.board.placeShip(testShip);
  expect(testPlayer.checkCollide(4, Coords(2, 5), 'vertical')).toBe(true);

});


test('Check if ships are on the edge', () => {
  let testPlayer = new Player();
  expect(testPlayer.checkOnEdge('horizontal', Coords(0, 0), 3)).toBe(true);
  expect(testPlayer.checkOnEdge('horizontal', Coords(4, 9), 3)).toBe(true);
  expect(testPlayer.checkOnEdge('horizontal', Coords(9, 0), 3)).toBe(true);
  expect(testPlayer.checkOnEdge('horizontal', Coords(0, 3), 3)).toBe(true);
  expect(testPlayer.checkOnEdge('horizontal', Coords(4, 5), 3)).toBe(false);
  expect(testPlayer.checkOnEdge('vertical', Coords(6, 0), 3)).toBe(true);
  expect(testPlayer.checkOnEdge('vertical', Coords(3, 9), 3)).toBe(true);
  expect(testPlayer.checkOnEdge('vertical', Coords(7, 4), 3)).toBe(true);
  expect(testPlayer.checkOnEdge('vertical', Coords(6, 0), 3)).toBe(true);
  expect(testPlayer.checkOnEdge('vertical', Coords(3, 7), 3)).toBe(false);

})

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
