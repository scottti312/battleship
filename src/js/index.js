import '../css/style.css';
import Display from './domstuff/display.js';

let display = new Display;
display.loadBoards();
document.querySelector('.cheat').addEventListener('click', () => {
  display.cpuDisplayShips();
  display.cheater = true;
});

display.rotate();
