const { NotImplementedError } = require("../extensions/index.js");

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
  isDirect = true;

  alphaLower = "abcdefghijklmnopqrstuvwxyz";
  alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  isLetter(char) {
    return this.alphaLower.includes(char) || this.alphaUpper.includes(char);
  }

  rotXUpperEncrypt(char, x) {
    if (!this.isLetter(char)) {
      return char;
    }

    let charUpper = char.toUpperCase();
    let taretCharCode =
      ((charUpper.charCodeAt(0) + x.charCodeAt(0)) % 26) + "A".charCodeAt(0);
    return String.fromCharCode(taretCharCode);
  }

  encrypt(text, key) {
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    }

    const chars = [...text];
    const uppercaseKey = key.toUpperCase();
    let result = "";
    let keyIdx = 0;

    for (let i = 0; i < chars.length; i++) {
      keyIdx = keyIdx % uppercaseKey.length;
      const keyChar = uppercaseKey[keyIdx];
      const char = chars[i];

      result += this.rotXUpperEncrypt(char, keyChar);
      if (this.isLetter(char)) {
        keyIdx += 1;
      }
    }

    if (!this.isDirect) {
      return [...result].reverse().join("");
    }
    return result;
  }

  rotXUpperDecrypt(char, x) {
    if (!this.isLetter(char)) {
      return char;
    }

    let charUpper = char.toUpperCase();
    let taretCharCode =
      ((charUpper.charCodeAt(0) - x.charCodeAt(0) + 26) % 26) +
      "A".charCodeAt(0);
    return String.fromCharCode(taretCharCode);
  }

  decrypt(text, key) {
    if (!text || !key) {
      throw new Error("Incorrect arguments!");
    }
    const chars = [...text];
    const uppercaseKey = key.toUpperCase();
    let result = "";
    let keyIdx = 0;

    for (let i = 0; i < chars.length; i++) {
      keyIdx = keyIdx % uppercaseKey.length;
      const keyChar = uppercaseKey[keyIdx];
      const char = chars[i];

      result += this.rotXUpperDecrypt(char, keyChar);
      if (this.isLetter(char)) {
        keyIdx += 1;
      }
    }

    if (!this.isDirect) {
      return [...result].reverse().join("");
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
