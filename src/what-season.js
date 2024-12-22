const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (arguments.length == 0) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date)) {
    throw new Error("Invalid date!");
  }

  if (
    Object.getOwnPropertyNames(date).sort().toString() !=
    Object.getOwnPropertyNames(new Date()).sort().toString()
  ) {
    throw new Error("Invalid date!");
  }

  const month = date.getMonth() + 1;
  if (month == 12 || month <= 2) {
    return "winter";
  } else if (3 <= month && month <= 5) {
    return "spring";
  } else if (6 <= month && month <= 8) {
    return "summer";
  } else if (9 <= month && month <= 11) {
    return "autumn";
  }
}

module.exports = {
  getSeason,
};
