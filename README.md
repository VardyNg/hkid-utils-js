# hkidvalidator

A JavaScript library for validating Hong Kong Identity Card (HKID) numbers.  

## Features 🤖

- Validate HKID number
  - Supports brackets! `()`
  - No matter what case `aAbC`

## Installation 📦

<i>to be added when released...</i>

## Usage

```javascript
const hkidvalidator = require('hkidvalidator');

// Validate HKID number
hkidvalidator.validate('G123456(A)'); // true
hkidvalidator.validate('aB987654(3)'); // true
hkidvalidator.validate('X3459387'); // true

hkidvalidator.validate('123(A)4'// false
```

## Todo ✅
- Main Features
  - [ * ] Validate HKID number
  - [ ] Generate random HKID number
- DevOps
  - [ ] GitHub Actions pipeline to release package to NPM
## Contribution guidelines 📝

- Fork the repository 🍴
- Create a branch with your feature or bug fix 🎋
- Commit your changes 💽
- Create a pull request 🧰
