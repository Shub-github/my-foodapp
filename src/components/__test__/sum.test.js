import SumOfTwo from "../SumOfTwo";

test("sum function should return the sum of two number", () => {
  const sum = SumOfTwo(3, 4);

  expect(sum).toBe(7);
});
