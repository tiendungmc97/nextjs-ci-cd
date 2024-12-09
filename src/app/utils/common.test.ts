import { sum } from "./common";

test("adds -1 + -2 to equal -3", () => {
  expect(sum(-1, -2)).toEqual(-3);
});

test("adds 1 + -2 to equal -1", () => {
  expect(sum(1, -2)).toEqual(-1);
});

test("adds 0 + 5 to equal 5", () => {
  expect(sum(0, 5)).toBe(5);
});

test("adds 0 + 0 to equal 0", () => {
  expect(sum(0, 0)).toBe(0);
});
