const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater(
 *  'STRING',
 *  {
 *    repeatTimes: 3,
 *    separator: '**',
 *    addition: 'PLUS',
 *    additionRepeatTimes: 3,
 *    additionSeparator: '00'
 *   }
 * )
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  if (typeof addition != "string") {
    addition = `${addition}`;
  }

  let additionArr = [];
  let additionStr = "";
  for (let i = 0; i < additionRepeatTimes; i++) {
    additionArr.push(addition);
  }
  additionStr = str + additionArr.join(additionSeparator);

  let arr = [];
  for (let i = 0; i < repeatTimes; i++) {
    arr.push(additionStr);
  }

  return arr.join(separator);
}

module.exports = {
  repeater,
};
