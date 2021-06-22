//row1, row2, row3

//  [1  2  3]
//  [3  1  2]  
//  [2  3  1]

//  [x  x  x]
//  [x  x  x]  
//  [x  x  x]

//  [x  x  x]
//  [x  x  x]  
//  [x  x  x]

//no duplicates across.. (array)
//no duplicates down.. (array within an array)

export default function Sudoku() {
  this.row1 = [1,2,3];
  this.row2 = [3,1,2];
  this.row3 = [2,3,1];
  this.col1 = [1,3,2];
  this.col2 = [2,1,3];
  this.col3 = [3,2,1];
}

Sudoku.prototype.includesAllNumbers = function() {
  if (this.row1.includes(1) && this.row1.includes(2) && this.row1.includes(3)) {
    return true;
  } else {
    return false;
  }
}

Sudoku.prototype.firstColumnTrue = function() {
  if (this.col1.includes(1) && this.col1.includes(2) && this.col2.includes(3)) {
    return true;
  } else {
    return false;
  }
}