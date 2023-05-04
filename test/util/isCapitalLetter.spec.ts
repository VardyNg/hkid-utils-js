import { isCapitalLetter } from '../../src/util/isCapitalLetter';

describe('isCapitalLetter', () => {
  it('should return true for capital letters', () => {
    expect(isCapitalLetter('A')).toBe(true);
    expect(isCapitalLetter('Z')).toBe(true);
  });

  it('should return false for non-capital letters', () => {
    expect(isCapitalLetter('a')).toBe(false);
    expect(isCapitalLetter('z')).toBe(false);
    expect(isCapitalLetter('5')).toBe(false);
    expect(isCapitalLetter(' ')).toBe(false);
    expect(isCapitalLetter('')).toBe(false);
  });

  it('should throw an error if passed an invalid argument', () => {
    expect(() => isCapitalLetter(undefined)).toThrow(TypeError);
    expect(() => isCapitalLetter(null)).toThrow(TypeError);
    expect(() => isCapitalLetter([])).toThrow(TypeError);
    expect(() => isCapitalLetter({})).toThrow(TypeError);
  });
});