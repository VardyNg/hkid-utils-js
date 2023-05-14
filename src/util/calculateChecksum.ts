/**
 * Calculates the checksum of a given string
 * @param {string} leadingLetters - The leading letters of the string
 * @param {string} numbers - The string to calculate the checksum of
 * @returns {number} The checksum of the given string
 */

export function calculateChecksum(leadingLetters: string, numbers: string) {
  let checksum = 0;
  // calculate checksum for leading letters
  // According to ASCII table, A = 65, B = 66, C = 67, ..., Z = 90
  // Therefore, reduce 55 from the ASCII value to get the number
  if (leadingLetters.length === 2) {
    checksum += 9 * (leadingLetters.charCodeAt(0) - 55) % 11;
    checksum += 8 * (leadingLetters.charCodeAt(1) - 55) % 11;
  } else {
    checksum += 9 * 36 % 11;
    checksum += 8 * (leadingLetters.charCodeAt(0) - 55) % 11;
  }
  // calculate checksum for numbers
  for (let i = 0, j = 7; i < numbers.length; i++, j--){
    checksum += j * parseInt(numbers.charAt(i), 10) % 11;
  }
  return checksum;
}
