import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arr = [];
  let str = String(n);

  for (let i = 0; i < str.length; i++) {
    let sym = str[i];
    let reg = RegExp(sym, '');
    let result = str.replace(reg, '');
    arr.push(result);
  }
  return Math.max.apply(null, arr);
}
