import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {

  constructor(bool = true){
    this.bool = bool;
  }
 
  encrypt(message, key) {
     if(message === undefined || key === undefined){
         throw new Error('Incorrect arguments!');
       }
 
     const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     let arr = [];
     let messageUp = message.toUpperCase();
     let keyUp = key.toUpperCase();
    
 
     for(let i = 0, j = 0; i < messageUp.length; i++) {
       if(ABC.indexOf(messageUp[i]) === -1) {
         arr.push(messageUp[i]);
         continue;
       } 
 
       let keySumbol = ABC[((ABC.indexOf(messageUp[i]) + ABC.indexOf(keyUp[j])) % 26)];
       j++;
 
       if (j === keyUp.length) {
          j = 0;
       }
       arr.push(keySumbol);
     }
 
       if (!this.bool) {
         arr.reverse();
       }
       let result = arr.join('');
       return result;
  }    
 
  decrypt(secret, key) {
     if(secret === undefined || key === undefined){
        throw new Error('Incorrect arguments!');
     }
 
     const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
     let arr = [];
     let secretUp = secret.toUpperCase();
     let keyUp = key.toUpperCase();
 
     for(let i = 0, j = 0; i < secretUp.length; i++) {
       if(ABC.indexOf(secretUp[i]) === -1) {
         arr.push(secretUp[i]);
         continue;
       } 
 
       let keySumbol = ABC[((ABC.indexOf(secretUp[i]) - ABC.indexOf(keyUp[j]) + 26) % 26)];
       j++;
 
       if (j === keyUp.length) {
          j = 0;
       }
       arr.push(keySumbol);
     }
 
       if (!this.bool) {
         arr.reverse();
       }
 
       let result = arr.join('');
       return result;    
  }
}
