import * as test from "tape";
import { Sum } from "./sum";

let numArray = new Sum();

test("it returns valid sum with 2 numbers", (t) => {
  t.equal(numArray.sumNumbers([2, 3]), 5);
  t.end();
});

test("it returns valid sum more than 2 numbers", (t) => {
  t.equal(numArray.sumNumbers([2, 3, 20]), 25);
  t.end();
});
test("it returns valid sum with negative number", (t) => {
  t.equal(numArray.sumNumbers([-2, 3]), 1);
  t.end();
});
test("it returns valid sum with one number", (t) => {
  t.equal(numArray.sumNumbers([3]), 3);
  t.end();
});

test("it returns valid sum with an empty list", (t) => {
  t.equal(numArray.sumNumbers([]), 0);
  t.end();
});
