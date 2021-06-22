import Sudoku from "../src/sudoku.js"

describe('Sudoku', () => {

  let sudokuPuzzle;

  beforeEach(() => {
    sudokuPuzzle = new Sudoku(); 
  })

  test('should correctly create a sudoku object with three row properties', () => {
    expect(sudokuPuzzle.row1).toEqual([1,2,3]);
    expect(sudokuPuzzle.row2).toEqual([3,1,2]);
    expect(sudokuPuzzle.row3).toEqual([2,3,1]);
  });

  test('should portray an array with unique numbers from 1 to 3', () => {
    // let sudokuPuzzle.row1 = [1,2,3]
    expect(sudokuPuzzle.includesAllNumbers()).toEqual(true);
  });

  test('should portray 0 index of each row with unique numbers from 1 to 3', () => {
    expect(sudokuPuzzle.firstColumnTrue()).toEqual(true);
  });
});