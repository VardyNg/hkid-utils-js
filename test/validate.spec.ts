import { validate } from '../src/validate';

describe ('test validate function', () => {
  describe('Valid HKID', () => {
    it.each([
      ['G123456(A)'],
      ['AB987654(3)'],
    ])('should return true if HKID is valid', (VALID_HKID) => {
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
  });
})