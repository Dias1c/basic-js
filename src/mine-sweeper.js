const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const getMine = (x, y) => {
    if (!matrix[y] || !matrix[y][x]) {
      return 0;
    }
    return 1;
  };

  const getSize = (x, y) => {
    if (matrix[y][x] === true) {
      return 1;
    }

    let top = y + 1;
    let bottom = y - 1;
    let left = x - 1;
    let right = x + 1;

    return (
      getMine(left, top) +
      getMine(x, top) +
      getMine(right, top) +
      getMine(left, y) +
      getMine(right, y) +
      getMine(left, bottom) +
      getMine(x, bottom) +
      getMine(right, bottom)
    );
  };

  let result = [];

  for (let y = 0; y < matrix.length; y++) {
    result.push([]);
    for (let x = 0; x < matrix[y].length; x++) {
      const cost = getSize(x, y);
      result[y].push(cost);
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
