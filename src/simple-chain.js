import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  arr : [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this.arr[position - 1] === undefined) {
      this.arr = []
      throw Error("You can't remove incorrect link!")
    }

    if (this.arr[position]) {
      this.arr.splice(position - 1, 1);
    }
    else {
      this.arr = [];
      throw new Error;
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this
  },
  finishChain() {
    let str = this.arr.join('~~');
    this.arr = [];
    return str;
  }
};
