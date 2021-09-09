const stringLength = require('./tasks/stringLength');
const reverseString = require('./tasks/reverseString');
const simpleCalc = require('./tasks/simpleCalculator');
const capitalize = require('./tasks/capitalize');

test('String length = 9', () => {
  expect(stringLength('Rustamjon')).toBe(9);
});

test('the string is at least 1 character long', () => {
  expect(stringLength('')).toBe('string is empty');
});

test('the string is longer than 10 characters', () => {
  expect(stringLength('Rustamjon Tolipov')).toBe('string is too long');
});

test('the string is reversed', () => {
  expect(reverseString('ko')).toBe('ok');
});

describe('Add 1 + 1', () => {
  test('result is 2', () => {
    expect(simpleCalc.add()).toBe(2);
  });
});

describe('Subtract 1 - 1', () => {
  test('result is 0', () => {
    expect(simpleCalc.subtract()).toBe(0);
  });
});

describe('divide 1 / 1', () => {
  test('result is 1', () => {
    expect(simpleCalc.divide()).toBe(1);
  });
});

describe('Multiply 1 * 1', () => {
  test('result is 1', () => {
    expect(simpleCalc.multiply()).toBe(1);
  });
});

test('Capitalize function works', () => {
  expect(capitalize('working')).toBe('Working');
});