# node-ifeq

node module for providing short if equals execution flow

## Installation

```bash

npm i @f0c1s/ifeq

```

## Usage

```javascript

const {ifeqString, ifeqNumber} = require('@f0c1s/ifeq')

ifeqString("WHAT".toLocaleLowerCase(), 'what', v => console.log(v))
ifeqNumber(Number.MAX_SAFE_INTEGER - 2, Number.MAX_SAFE_INTEGER - 1 - 1, console.log)

```
