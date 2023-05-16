import { random } from '../src/random';
import { validate } from '../src/validate';
describe ('test random function', () => {
  describe('config: {}', () => {
    it('should return HKID', () => {
      // Arrange
      const config = {};
      // Act
      const result = random(config);
      // Assert
      validate(result);
    })
  })

  describe('config.includeBrackets', () => {
    it.each([
      { includeBrackets: true },
      {},
    ])
     ('should return HKID with brackets', (config) => {
      // Act
      const result = random(config);
      // Assert
      expect(result).toMatch(/\([A-Z0-9]\)/);
    })

    it('should return HKID without brackets', () => {
      // Arrange
      const config = { includeBrackets: false };
      // Act
      const result = random(config);
      // Assert
      expect(result).toMatch(/[A-Z0-9]/);
    })
  })
})