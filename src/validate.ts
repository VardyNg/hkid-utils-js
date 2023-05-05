import {
  normalise,
  isCapitalLetter,
} from './util';

/**
 * Checks if an HKID contains valid characters.
 * @param hkid - The HKID to check.
 * @returns True if the HKID contains only valid characters, false otherwise.
 */
function containsValidCharacters(hkid: string): boolean {
  const regex = /^[A-Za-z0-9()]+$/;
  return regex.test(hkid);
}

/**
 * Extracts the leading letters from an HKID.
 * @param hkid - The HKID to extract the leading letters from.
 * @returns The leading letters of the HKID.
 * @throws If the HKID does not start with a capital letter.
 */
function extractLeadingLetters(hkid: string): string {
  const firstChar = hkid.charAt(0);
  if (!isCapitalLetter(firstChar)) {
    throw new Error('HK ID does not start with a letter');
  }

  let cap = firstChar;
  const secondChar = hkid.charAt(1);
  if (isCapitalLetter(secondChar)) {
    cap += secondChar;
  }
  return cap;
}

/**
 * Extracts the numbers part from an HKID.
 * @param hkid - The HKID to extract the numbers part from.
 * @param pointer - The starting position of the numbers part in the HKID.
 * @returns The numbers part of the HKID.
 */
function extractNumbers(hkid: string, pointer: number): string {
  return hkid.substring(pointer, pointer + 6);
}

/**
 * Extracts the check digit from an HKID.
 * @param hkid - The HKID to extract the check digit from.
 * @param pointer - The position of the check digit in the HKID.
 * @returns The check digit of the HKID.
 */
function extractCheckDigit(hkid: string, pointer: number): string {
  return hkid.charAt(pointer);
}

/**
 * Validates the remainder of an HKID against its check digit.
 * @param remainder - The remainder of the HKID.
 * @param checksum - The check digit of the HKID.
 * @throws If the remainder does not match the check digit.
*/
function validateRemainder(remainder: number, checksum: string): void {
  let numCheckSum: number;
  if (checksum === 'A') {
    numCheckSum = 10;
  } else {
    numCheckSum = parseInt(checksum, 10);
  }

  if (remainder !== 0) {
    remainder = 11 - remainder;
  }

  if (remainder !== numCheckSum) {
    throw new Error('HK ID check digit is invalid');
  }
}

/**
  * Validates an HKID.
  * @param hkid - The HKID to validate.
  * @returns True if the HKID is valid, false otherwise.
*/
export function validate(hkid: string): boolean {
  try {
    if (!containsValidCharacters(hkid)) {
      return false;
    }

    const normalisedHkid = normalise(hkid);

    if (normalisedHkid.length < 8 || normalisedHkid.length > 9) {
      return false;
    }

    const leadingLetters = extractLeadingLetters(normalisedHkid);

    const numbers = extractNumbers(normalisedHkid, leadingLetters.length);

    const checkDigit = extractCheckDigit(normalisedHkid, leadingLetters.length + numbers.length);

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
    for (var i = 0, j = 7; i < numbers.length; i++, j--){
      checksum += j * parseInt(numbers.charAt(i), 10) % 11;
    }

    const remainder = checksum % 11;

    validateRemainder(remainder, checkDigit);
    return true;
  } catch (error) {
    return false;
  }
}