import  { sum } from "./calc";

// Create a test function to be run
// using an expect 
test('Adding 2 + 3 should give me 5', () => {
    expect(sum(2, 3)).toBe(5);
})