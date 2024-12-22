const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (arr.length == 0) {
    return [];
  }

  let result = [];

  const commands = {
    isDiscardNext: (val) => {
      return val === "--discard-next";
    },
    isDiscardPrev: (val) => {
      return val === "--discard-prev";
    },
    isDoubleNext: (val) => {
      return val === "--double-next";
    },
    isDoublePrev: (val) => {
      return val === "--double-prev";
    },
  };

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    if (commands.isDiscardNext(val)) {
      i = i + 1;
      continue;
    }

    if (commands.isDiscardPrev(val)) {
      if (result.length > 0 && result.at(-1) == arr[i - 1]) {
        result.splice(-1, 1);
      }
      continue;
    }

    if (commands.isDoubleNext(val)) {
      if (i + 1 < arr.length) {
        result.push(arr[i + 1]);
      }
      continue;
    }

    if (commands.isDoublePrev(val)) {
      if (i > 0 && result.at(-1) == arr[i - 1]) {
        result.push(result.at(-1));
      }
      continue;
    }

    result.push(arr[i]);
  }

  return result;
}

module.exports = {
  transform,
};
