const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (0 in arguments) this.chain.push(value);
    else this.chain.push("");
    return this;
  },
  removeLink(position) {
    let index = position - 1;
    if (
      !Number.isInteger(position) ||
      index < 0 ||
      this.chain.length <= index
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(index, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.map((v) => `( ${v} )`).join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
