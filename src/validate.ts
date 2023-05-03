
export function validate(hkid: string) {
  console.log('validate', hkid);

  // check if the id number only contains digits (0-9), letters in both case (A-Z, a-z) and brackets
  const regex = /^[A-Za-z0-9()]+$/;
  if (!regex.test(hkid)) return false;

  return true;
}