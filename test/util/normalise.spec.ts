import { normalise } from '../../src/util/normalise';

describe ('test normalise function', () => {
  it('should convert all lowercase characters to upper case', () => {
    // Arrange
    const HKID = 'a123456(0)';
    // Act
    const result = normalise(HKID);
    // Assert
    const regex = /^[A-Z0-9()]+$/;
    expect(regex.test(result)).toBe(true);
  });

  it('should remove all spaces', () => {
    // Arrange
    const HKID = 'A 123456 (0)';
    // Act
    const result = normalise(HKID);
    // Assert
    const regex = /^[A-Z0-9()]+$/;
    expect(regex.test(result)).toBe(true);
  })
})