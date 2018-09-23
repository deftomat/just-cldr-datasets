# Just CLDR datasets

A simple package with CLDR datasets exported as JavaScript objects.

## Why ?

Because you want to include a simple list of time zones, countries, etc. in your application without importing any other unnecessary code.

## Available datasets (English only)

- Time zones
- Countries
- States / Provinces (US, CA, AU)

## Installation

```
npm install just-cldr-datasets --save
```

## Usage

```js
import timeZones from 'just-cldr-datasets/timeZones';
import countries from 'just-cldr-datasets/countries';
import states from 'just-cldr-datasets/states';

console.log(timeZones); // ['Africa/Abidjan', 'Africa/Accra', ...]
console.log(countries.CA); // Canada
console.log(states.CA.ON); // Ontario
```

## TypeScript support

All datasets includes TypeScript type definitions.

For example, type checker will complain about `states.US.AB` as state `AB` doesn't exist in `US` country.

## Contribution

1. Add a generator function to [bin/generate.js](./bin/generate.js) or manually create a predefined dataset in `predefined` directory.
2. Run `npm run build`.
3. Double check the generated JS files.
4. Create a PR 🎉
