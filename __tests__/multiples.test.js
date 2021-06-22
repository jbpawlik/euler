import HoldNumbers from "../src/multiples.js"



describe('divide(num)', () => {
  let holdNumbers;
  
  beforeEach(() => {
    holdNumbers = new HoldNumbers();
  });

  test('should divide num by 3 without remainder and output answer', () => {
    expect(holdNumbers.divide(10)).toEqual(3);
  });

  test('should loop in the array however many times numberDivided is and multiply by 3', () => {
    expect(holdNumbers.divide(10)).toEqual(3);
    expect(holdNumbers.multiplyBy3()).toEqual([3,6,9]);
  });

  test('should add multiples of three and return sum', () => {
    expect(holdNumbers.divide(10)).toEqual(3);
    expect(holdNumbers.multiplyBy3()).toEqual([3,6,9]);
    expect(holdNumbers.addMultiples()).toEqual(18);
  })
});