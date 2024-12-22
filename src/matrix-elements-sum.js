const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (!Array.isArray(matrix) || matrix.length == 0 || matrix[0].length == 0) {
    return 0;
  }

  const getSize = (x, y) => {
    if (
      x < 0 ||
      y < 0 ||
      y >= matrix.length ||
      x >= matrix[0].length ||
      matrix[y][x] <= 0
    ) {
      return 0;
    }

    let value = matrix[y][x];
    matrix[y][x] = 0;

    return (
      value +
      getSize(x + 1, y) +
      getSize(x - 1, y) +
      getSize(x, y + 1) +
      getSize(x, y - 1)
    );
  };

  let result = 0;
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] == 0) {
        continue;
      }

      const sum = getSize(x, y);
      result = Math.max(sum, result);
    }
  }
  return result;
}

module.exports = {
  getMatrixElementsSum,
};
