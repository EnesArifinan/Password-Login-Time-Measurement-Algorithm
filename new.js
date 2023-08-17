
//! This is for a more optimized algorithm but it is not complete yet

const matrix = [
  [6, 4, 3],
  [9, 8, 2],
  [5, 7, 1],
];

const array = [6, 2, 3, 4, 6, 5];

let count = 0;

for (let i = 0; i < array.length - 1; i++) {
  const currentNumber = array[i];
  const nextNumber = array[i + 1];

  const [currentRow, currentCol] = findIndex(matrix, currentNumber);
  const [nextRow, nextCol] = findIndex(matrix, nextNumber);

  const rowDiff = Math.abs(currentRow - nextRow);
  const colDiff = Math.abs(currentCol - nextCol);

  count += rowDiff + colDiff;
}

console.log(count);

function findIndex(matrix, number) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === number) {
        return [row, col];
      }
    }
  }
  return [-1, -1];
}
