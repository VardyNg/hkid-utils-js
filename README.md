[![npm version](https://badge.fury.io/js/hkid-utils.svg)](https://badge.fury.io/js/hkid-utils)
![NPM](https://img.shields.io/npm/l/hkid-utils)
# hkid-utils

A JavaScript toolkit to handle Hong Kong Identity Card (HKID) numbers, validate and generate random HKID numbers.
 

## Features 🤖

- Validate HKID number
  - Supports brackets! `()`
  - No matter what case `aAbC`
- Generate Random HKID
## Installation 📦

```sh
npm install hkid-utils
```

or   
```sh
yarn add hkid-utils
```
## [NPM Package 📦](https://www.npmjs.com/package/hkid-utils)
## Usage

```javascript
const hkidUtils = require('hkid-utils');

// Validate HKID number
hkidUtils.validate('G123456(A)'); // true
hkidUtils.validate('aB987654(3)'); // true
hkidUtils.validate('X3459387'); // true

hkidUtils.validate('123(A)4') // false

// Generate random HKID number
hkidUtils.random(); // 'A123456(7)'
```

## Todo ✅
- Main Features
  - [x] Validate HKID number
  - [x] Generate random HKID number
    - [ ] with "includeBrackets" option

- DevOps
  - [x] GitHub Actions pipeline to release package to NPM
- Compatibility
  - [x] ES5 (NodeJS)
  - [ ] ES6 (Browser)

## Contribution guidelines 📝
Your contributions are always welcome! Even if it's just a typo or a missing comma, we'll appreciate it.
- Fork the repository 🍴
- Create a branch with your feature or bug fix 🎋
- Commit your changes 💽
- Create a pull request 🧰
