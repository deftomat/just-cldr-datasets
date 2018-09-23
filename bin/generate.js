#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const cldr = require('cldr');

const {
  map,
  pipe,
  reduce,
  concat,
  uniq,
  filter,
  append,
  sort,
  keys,
  startsWith,
  complement,
  toPairs,
  fromPairs
} = require('ramda');

const reduceArray = reduce(concat, []);

const extractTimeZones = pipe(
  map(id => cldr.extractTimeZoneDisplayNames(id)),
  map(keys),
  reduceArray,
  uniq,
  filter(complement(startsWith('Etc/'))),
  append('Etc/UTC'),
  sort((a, b) => a.localeCompare(b)),
  saveAs('timeZones')
);

const extractCountries = pipe(
  locale => cldr.extractTerritoryDisplayNames(locale),
  toPairs,
  filter(([code]) => isNaN(code) && code !== 'ZZ'),
  fromPairs,
  saveAs('countries')
);

function saveAs(name) {
  const filePath = path.resolve(__dirname, `../tmp/${name}.ts`);
  return data => fs.writeFileSync(filePath, `export default ${JSON.stringify(data, null, 2)}`);
}

extractTimeZones(cldr.localeIds);
extractCountries('en-US');
