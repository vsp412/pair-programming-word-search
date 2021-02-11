// Partner Programming Activity
// @sandratoh
// @vsp412
// @SPARTAN-501

// Input: An array of arrays (nested or just one)
// Output: An array of arrays (possibly one array),

// printMatrix inside transpose

const transpose = function (matrix) {
  // Put your solution here
  let m = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let d = [];
    for (let j = 0; j < matrix.length; j++) {
      d.push(matrix[j][i]);
    }
    m.push(d);
  }
  return m;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + ' ');
    }
    process.stdout.write('\n');
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log('----');

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log('----');

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));

module.exports = transpose;
