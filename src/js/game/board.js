function initializeBoard() {
  const arr = new Array(10);
  for (let i = 0; i < 10; i++) {
    arr[i] = new Array(10).fill(0);
  }
  return arr;
}

export { initializeBoard };
