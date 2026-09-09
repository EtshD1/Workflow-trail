const test = require('node:test');
const assert = require('node:assert/strict');

const { add, subtract, multiply, divide, square } = require('./math');

test('add adds two numbers', () => {
  assert.equal(add(2, 3), 5);
});

test('subtract subtracts two numbers', () => {
  assert.equal(subtract(5, 3), 2);
});

test('multiply multiplies two numbers', () => {
  assert.equal(multiply(4, 3), 12);
});

test('divide divides two numbers', () => {
  assert.equal(divide(10, 2), 5);
});

test('divide throws on division by zero', () => {
  assert.throws(() => divide(1, 0), /Cannot divide by zero/);
});

test('square squares a number', () => {
  assert.equal(square(4), 16);
});
