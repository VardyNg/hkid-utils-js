/**
 * Normalize HKID
 * @param hkid
 * @returns {string} normalised HKID
 */
export function normalise(hkid: string){
  // set all characters to uppercase
  hkid = hkid.toUpperCase();
  // remove brackets
  hkid = hkid.replace(/[\(\)]/g, '');
  // remove spaces
  hkid = hkid.replace(/\s/g, '');
  return hkid;
}