const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let m1 = new Map();
  [...s1].forEach((c) => {
    let cnt = 1;
    if (m1.has(c)) {
      cnt += m1.get(c);
    }
    m1.set(c, cnt);
  });

  let m2 = new Map();
  [...s2].forEach((c) => {
    let cnt = 1;
    if (m2.has(c)) {
      cnt += m2.get(c);
    }
    m2.set(c, cnt);
  });

  let result = 0;

  for (const [key, value] of m1.entries()) {
    result += Math.min(value, m2.get(key) ?? 0);
  }

  return result;
}

module.exports = {
  getCommonCharacterCount,
};
