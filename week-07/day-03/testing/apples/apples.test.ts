import * as test from 'tape';
import { Apple } from './apples';

test(`getApple(myObject) should return apple`, (t) => {
  const myObject = new Apple();

  const actual = myObject.getApple(`apple`);
  const expected = `apple`;
  t.equal(actual, expected);
  t.end();
});

// test(`getApple(myObject) should return apple`, (t) => {
//     const myObject = new Apple();

//     const actual = myObject.getApple(`pear`);
//     const expected = `apple`;
//     t.equal(actual, expected);
//     t.end();
//   });
