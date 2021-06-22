import { htmlPrefilter } from "jquery";

export default function HoldNumbers() {
  this.numberDividedBy3 = 0;
  this.numberDividedBy5 = 0
  this.array = []
  this.sum = 0
}

HoldNumbers.prototype.divideBy3 = function(num) {
  this.numberDividedBy3 = Math.round(num / 3);
  return this.numberDividedBy3;
};

HoldNumbers.prototype.divideBy5 = function(num) {
  this.numberDividedBy5 = Math.round(num / 5);
  return this.numberDividedBy5;
};

HoldNumbers.prototype.multiplyBy3 = function() {
  for (let i = 1; i <= this.numberDividedBy3; i++) {
    this.array.push(i * 3);
  }
  return this.array;
};

HoldNumbers.prototype.multiplyBy5 = function() {
  for (let i = 1; i <= this.numberDividedBy5; i++) {
    this.array.push(i * 5);
  }
  return this.array;
};

HoldNumbers.prototype.addMultiples = function() {
  let newArray = [...new Set(this.array)]
  for (let i = 0; i < newArray.length; i++) {
    this.sum = this.sum + this.array[i];
    }
    return this.sum;
};

//233,168 

//267,333 (with duplicates)