import {
  normalise,
  isCapitalLetter,
} from './util';

function containsValidCharacters(hkid: string): boolean {
  const regex = /^[A-Za-z0-9()]+$/;
  if (!regex.test(hkid)) {
    throw new Error('HK ID contains invalid characters');
  }
  return true;
}

function extractLeadingLetters(hkid: string): string {
  let cap = '';
  const firstChar = hkid.charAt(0);
  if (isCapitalLetter(firstChar)) {
    cap += firstChar;
  } else {
    throw new Error('HK ID does not start with a letter');
  }
  const secondChar = hkid.charAt(1);
  if (isCapitalLetter(secondChar)) {
    cap += secondChar;
  }
  return cap;
}

function extractNumbers(hkid: string, pointer: number): string {
  return hkid.substring(pointer, pointer + 6);
}

function extractCheckDigit(hkid: string, pointer: number): string {
  return hkid.charAt(pointer);
}

function validateRemainder(remainder: number, checksum: string){
  let numCheckSum: number;
  if (checksum === 'A') {
    numCheckSum = 10;
  } else {
    numCheckSum = parseInt(checksum, 10);
  }

  let valid = false;
  if (remainder !== 0) {
    remainder = 11 - remainder;  
  }
  
  valid = remainder === numCheckSum;
  console.log('valid:', valid)
  if (!valid) {
    throw new Error('HK ID check digit is invalid');
  }
}

export function validate(hkid: string): boolean {
  try {
    containsValidCharacters(hkid);

    const normalisedHkid = normalise(hkid);

    if (normalisedHkid.length < 8 || normalisedHkid.length > 9) {
      throw new Error('HK ID length is invalid');
    }

    const leadingLetters = extractLeadingLetters(normalisedHkid);

    const numbers = extractNumbers(normalisedHkid, leadingLetters.length);

    const checkDigit = extractCheckDigit(normalisedHkid, leadingLetters.length + numbers.length);

    console.log('Leading Letters:', leadingLetters);
    console.log('Numbers:', numbers);
    console.log('Check Digit:', checkDigit);

    // Add validation logic for leading letters, numbers, and check digit

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
