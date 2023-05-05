# hkidtoolkit

A JavaScript toolkit for validating Hong Kong Identity Card (HKID) numbers.  

## Features 🤖

- Validate HKID number
  - Supports brackets! `()`
  - No matter what case `aAbC`

## Installation 📦

```sh
npm install hkidtoolkit
```

or   
```sh
yarn add hkidtoolkit
```

## Usage

```javascript
const hkidtoolkit = require('hkidtoolkit');

// Validate HKID number
hkidtoolkit.validate('G123456(A)'); // true
hkidtoolkit.validate('aB987654(3)'); // true
hkidtoolkit.validate('X3459387'); // true

hkidtoolkit.validate('123(A)4'// false
```

## Todo ✅
- Main Features
  - [x] Validate HKID number
  - [ ] Generate random HKID number
- DevOps
  - [ ] GitHub Actions pipeline to release package to NPM
## Contribution guidelines 📝

- Fork the repository 🍴
- Create a branch with your feature or bug fix 🎋
- Commit your changes 💽
- Create a pull request 🧰
