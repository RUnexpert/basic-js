import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let addition;
  if (options.addition === undefined) {
      addition = '';
  } else {
      addition = String(options.addition);
  }

    str = String(str);

  let repeatTimes = options.repeatTimes;
  let additionRepeatTimes = options.additionRepeatTimes;
  let separator = options.separator;
  let additionSeparator = options.additionSeparator;
  if (!repeatTimes) repeatTimes = 1;
  if (!additionRepeatTimes) additionRepeatTimes = 1;
  if (!additionSeparator) additionSeparator = '|';
  if (!separator) separator = '+';
  
  let result = [];
  for (let i = 0; i < repeatTimes; i++) {
    result.push(str);
    for (let j = 0; j < additionRepeatTimes; j++) {
      result.push(addition);
      result.push(additionSeparator);
    }
    result.pop();
    result.push(separator);
  }
  result.pop();
  return result.join('');
}
