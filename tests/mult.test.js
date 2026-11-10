const mult = require('../src/mult')

it('should return correct multiplication of two numbers', () => {
  expect(mult(2, 5)).toBe(10);
});