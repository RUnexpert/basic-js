import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(domains) {
  let result = {};

  for (let elem of domains) {
    const arr = elem.split('.');
    const arrLeng = arr.length;

    for (let i = arrLeng - 1; i >= 0; i--) {
      let dns = '.' + arr.slice(i).reverse().join('.');
      result[dns] = result[dns] + 1 || 1;
    }
  }
    return result;
}
