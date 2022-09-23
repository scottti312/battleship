import '../css/style.css';
import Display from './domstuff/display.js';

let display = new Display;
display.loadBoards();
display.cpuDisplayShips();

display.rotate();
