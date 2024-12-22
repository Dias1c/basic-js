const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str || typeof str != "string") {
    return "";
  }

  const chars = [...str];
  if (chars.length == 1) {
    return chars[0];
  }

  let groups = [];
  let curGroupItem = [chars[0]];
  for (let i = 1; i < chars.length; i++) {
    const char = chars[i];
    if (char == curGroupItem[0]) {
      curGroupItem.push(char);
      continue;
    }

    groups.push(curGroupItem);
    curGroupItem = [char];
  }
  groups.push(curGroupItem);

  return groups.reduce((p, c) => {
    let char = c[0];

    if (c.length > 1) {
      return p + `${c.length}${char}`;
    }

    return p + char;
  }, "");
}

module.exports = {
  encodeLine,
};
