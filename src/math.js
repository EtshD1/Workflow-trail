/**
 * A handful of simple math functions used to demo the CI workflow.
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function square(n) {
  return n * n;
}

module.exports = { add, subtract, multiply, divide, square };
