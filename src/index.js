const {split, join, tap, compose, values, pickAll, ifElse, zipObj, map, toUpper} = require('ramda');

const unlines = join('\n');
const unwords = join(' ');
const unchars = join('');
const lines = ifElse(isEmpty, always([]), split('\n'));
const words = ifElse(isEmpty, always([]), split(/[ ]+/));
const chars = split('');

const log = tap(console.log);
const parseDate = (str) => new Date(str);
const pickIndexes = compose(values, pickAll);

const objFromKeys = (keys) =>
  zipObj(keys, map(toUpper, keys));

module.exports = {
  unlines, lines,
  unwords, words,
  unchars, chars,
  log,
  pickIndexes,
  objFromKeys,
  parseDate
};
