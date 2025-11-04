const board = document.getElementById('board');
const BOARD_SIZE = 960; // px

function makeGrid(n = 16) {
  board.innerHTML = '';
  const cellSize = BOARD_SIZE / n;
  for (let i = 0; i < n * n; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.style.width  = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    board.appendChild(cell);
  }
}

makeGrid(16);

board.addEventListener('mouseover', (e) => {
  if (!e.target.classList.contains('cell')) return;
  e.target.style.backgroundColor = '#333';
});

const resizeBtn = document.getElementById('resize');

resizeBtn.addEventListener('click', () => {
  const raw = prompt('Squares per side? (1–100)', '16');
  if (raw === null) return;                          // cancel → do nothing
  const n = parseInt(raw.trim(), 10);
  if (!Number.isInteger(n) || n < 1) {
    alert('Please enter a whole number ≥ 1');
    return;
  }
  makeGrid(Math.min(n, 100));                        // cap at 100
});