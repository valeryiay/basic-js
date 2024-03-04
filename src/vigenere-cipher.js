const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    const messageUpperCase = message.toUpperCase();
    const keyUpperCase = key.toUpperCase();
    let encryptedMessage = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      const char = messageUpperCase[i];
      if (char.match(/[A-Z]/)) {
        const shift = keyUpperCase[j % key.length].charCodeAt(0) - 65;
        const encryptedChar = String.fromCharCode(((char.charCodeAt(0) + shift - 65) % 26) + 65);
        encryptedMessage += encryptedChar;
        j++;
      } else {
        encryptedMessage += char;
      }
    }

    return this.reverse ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    const encryptedMessageUpperCase = encryptedMessage.toUpperCase();
    const keyUpperCase = key.toUpperCase();
    let decryptedMessage = '';

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const char = encryptedMessageUpperCase[i];
      if (char.match(/[A-Z]/)) {
        const shift = keyUpperCase[j % key.length].charCodeAt(0) - 65;
        const decryptedChar = String.fromCharCode(((char.charCodeAt(0) - shift + 26 - 65) % 26) + 65);
        decryptedMessage += decryptedChar;
        j++;
      } else {
        decryptedMessage += char;
      }
    }

    return this.reverse ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
