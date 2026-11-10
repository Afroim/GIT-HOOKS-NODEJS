const sum = require('../src/sum')

it('should return correct sum of two numbers', () => {
  expect(sum(2, 5)).toBe(7);
});