import { validate } from '../src/validate';

describe ('test validate function', () => {
  describe('Valid HKID', () => {
    it.each([
      ['G123456(A)'],
      ['aB987654(3)'],
      ['X3459387'],
    ])('should return true if HKID is valid', (VALID_HKID: string) => {
      // Act
      const result = validate(VALID_HKID);
      // Assert
      expect(result).toBe(true);
    });
  })
  describe('Invalid HKID', () => {
    it('should return false if HKID contains invalid character', () => {
      // Arrange
      const HKID = 'A1234560*'; // invalid character *
      // Act
      const result = validate(HKID);
      // Assert
      expect(result).toBe(false);
    })

    it.each([
      ['A123456'], // invalid HKID with 7 characters
      ['A1234567890'], // invalid HKID with 10 characters
    ])('should return false if HKID is with invalid length', (HKID) => {
      // Act
      const result = validate(HKID);
      // Assert
      expect(result).toBe(false);
    });

    it('should return false if HKID does not start with letter', () => {
      // Arrange
      const HKID = '0123456(0)'; // invalid HKID with 7 characters
      // Act
      const result = validate(HKID);
      // Assert
      expect(result).toBe(false);
    });
  });
})