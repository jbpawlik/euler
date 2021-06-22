import HoldNumbers from "../src/multiples.js"

describe('divide(num)', () => {
  let holdNumbers;
  
  beforeEach(() => {
    holdNumbers = new HoldNumbers();
  });

  test('should divide num by 3 without remainder and output answer', () => {
    expect(holdNumbers.divideBy3(1000)).toEqual(333);
  });
  
  test('should divide num by 5 without remainder and output answer', () => {
    expect(holdNumbers.divideBy5(1000)).toEqual(200);
  });

  test('should loop in the array however many times numberDivided is and multiply by 3', () => {
    expect(holdNumbers.divideBy3(1000)).toEqual(333);
    expect(holdNumbers.multiplyBy3()).toEqual([3,6,9]);
  });

  test('should loop in the array however many times numberDivided is and multiply by 5', () => {
    expect(holdNumbers.divideBy5(10)).toEqual(2);
    expect(holdNumbers.multiplyBy5()).toEqual([5, 10]);
  });

  test('should add multiples and return sum', () => {
    expect(holdNumbers.divideBy3(15)).toEqual(5);
    expect(holdNumbers.multiplyBy3()).toEqual([3,6,9,12,15]);
    expect(holdNumbers.divideBy5(15)).toEqual(3);
    expect(holdNumbers.multiplyBy5()).toEqual([3,6,9,12,15,5,10,15]);
    expect(holdNumbers.addMultiples()).toEqual(60);
  })
});