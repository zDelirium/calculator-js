import  { sum, subtract } from "./calc";

// Fixtures
beforeAll(() => {
    console.log("This will run before all the tests")
});

beforeEach(() => {
    console.log("This will printed before each test");
});

afterEach(() => {
    console.log("This will be printed after each test")
});

afterAll(() => {
    console.log("This will run after all the tests")
});


// Create a test function to be run
// using an expect 
test('Adding 2 + 3 should give me 5', () => {
    expect(sum(2, 3)).toBe(5);
});

test('Substract 2 from 3 that should give me 1', () => {
    expect(subtract(3, 2)).toBe(1);
});