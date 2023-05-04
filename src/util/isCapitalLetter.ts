export function isCapitalLetter(char: string) {
  if (typeof char !== 'string') {
    throw new TypeError('Argument must be a string');
  }
  return char >= 'A' && char <= 'Z';
}

