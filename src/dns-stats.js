const { NotImplementedError } = require('../extensions/index.js');

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
  let appearances = {};
  domains.forEach((elem) => {
    let domainBackwardsArr = elem.split('.').reverse();
    let str = '';
    domainBackwardsArr.forEach((elem) => {
      str += `.${elem}`;
      if (appearances[str]) {
        appearances[str]++;
      } else {
        appearances[str] = 1;
      }
    });
  });
  return appearances;
}

module.exports = {
  getDNSStats
};
