const hkidUtils = require('hkid-utils');

console.log(hkidUtils.validate('G123456(A)'));
console.log(hkidUtils.validate('aB987654(3)'));
console.log(hkidUtils.validate('X3459387'));
console.log(hkidUtils.validate('123(A)4'));