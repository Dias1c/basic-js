const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let splitted = n.split("-");

  if (splitted.length != 6) {
    return false;
  }

  const isHexUnit = (u) => {
    return ("0" <= u && u <= "9") || ("A" <= u && u <= "F");
  };

  for (let i = 0; i < splitted.length; i++) {
    const el = splitted[i];
    if (el.length != 2) {
      return false;
    }

    for (let j = 0; j < el.length; j++) {
      if (isHexUnit(el[j])) {
        continue;
      }
      return false;
    }
  }

  return true;
}
module.exports = {
  isMAC48Address,
};
