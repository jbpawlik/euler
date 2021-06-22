import divide from "../src/multiples.js"

describe('divide(num)', () => {
  test('should divide num by 3 without remainder and output answer', () => {
    expect(divide(10)).toEqual(3);
  })
})