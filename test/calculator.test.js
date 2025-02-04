const { add, subtract } = require('../src/calculator');

// Test cases for the add function
test('add two positive numbers', () => {
    expect(add(3, 5)).toBe(8);
});

test('add a positive and a negative number', () => {
    expect(add(10, -3)).toBe(7);
});

// Test cases for the subtract function
test('subtract two numbers', () => {
    expect(subtract(8, 3)).toBe(5);
});

test('subtract with negative result', () => {
    expect(subtract(5, 10)).toBe(-5);
});
