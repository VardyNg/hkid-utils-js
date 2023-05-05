/**
 * check if a character is a capital letter
 * @param char
 * @returns boolean
 */

export function isCapitalLetter(char: string) {
  if (typeof char !== 'string') {
    throw new TypeError('Argument must be a string');
  }
  return char >= 'A' && char <= 'Z';
}

