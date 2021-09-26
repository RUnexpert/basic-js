import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let arr = s1.length >= s2.length ? s1.split('') : s2.split('');
  let compare = s1.length < s2.length ? s1.split('') : s2.split('');
  let count = 0;
  for (let elem of compare) {
    if (arr.indexOf(elem) !== -1) {
        arr.splice(arr.indexOf(elem), 1);
        count++;
    }
  }
  return count;
}
