const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let m = new Map();
  let pushDNS = (value) => {
    let cnt = 1;
    if (m.has(value)) {
      cnt += m.get(value);
    }
    m.set(value, cnt);
  };

  domains.forEach((v) => {
    const splitted = v.split(".").reverse();
    let dns = "";
    for (let i = 0; i < splitted.length; i++) {
      dns += "." + splitted[i];
      pushDNS(dns);
    }
  });

  return Object.fromEntries(m);
}

module.exports = {
  getDNSStats,
};
