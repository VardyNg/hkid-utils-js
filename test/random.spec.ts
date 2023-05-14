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
})