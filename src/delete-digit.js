const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;

  let digits = [...`${n}`];

  for (let ignore = 0; ignore < digits.length; ignore++) {
    let sum = Number(digits.filter((v, i) => i != ignore).join(""));

    result = Math.max(result, sum);
  }

  return result;
}

module.exports = {
  deleteDigit,
};
