import { add, subtract, multiply, divide } from "./index";

// --- add() tests ---
test("return 5 if called add(2, 3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("return a negative value if the greater argument is negative in add(-5, 3)", () => {
  const result = add(-5, 3);
  expect(result).toBeLessThan(0);
});

// --- subtract() tests ---
test("return 10 if called subtract(15, 5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("return a negative value if second argument is greater in subtract(3, 5)", () => {
  const result = subtract(3, 5);
  expect(result).toBeLessThan(0);
});

// --- multiply() tests ---
test("return 8 if called multiply(2, 4)", () => {
  const result = multiply(2, 4);
  expect(result).toBe(8);
});

test("return a negative value if only the first argument is negative", () => {
  const result = multiply(-2, 3);
  expect(result).toBeLessThan(0);
});

test("return a positive value if both arguments are negative", () => {
  const result = multiply(-2, -3);
  expect(result).toBeGreaterThan(0);
});

// --- divide() tests ---
test("return 3 if called divide(9, 3)", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("return 'You should not do this!' if second argument is 0", () => {
  const result = divide(5, 0);
  expect(result).toBe("You should not do this!");
});
