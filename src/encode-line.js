const { NotImplementedError } = require('../extensions/index.js');

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
  let encodedString = '';
  let count = 0;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
      if (i === str.length - 1) {
        if (count >= 1) {
          encodedString += count + 1;
        }
        encodedString += str[i];
      }
    } else {
      if (count >= 1) {
        encodedString += count + 1;
      }

      encodedString += str[i - 1];
      count = 0;
      if (i === str.length - 1) {
        encodedString += str[i];
      }
    }
  }
  return encodedString;
};

module.exports = {
  encodeLine
};
