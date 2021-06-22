import { htmlPrefilter } from "jquery";

export default function HoldNumbers() {
  this.numberDivided = 0;
  this.array = []
  this.sum = 0
}

HoldNumbers.prototype.divide = function(num) {
  this.numberDivided = Math.round(num / 3);
  return this.numberDivided;
};

HoldNumbers.prototype.multiplyBy3 = function() {
  for (let i = 1; i <= this.numberDivided; i++) {
    this.array.push(i * 3);
  }
  return this.array;
};

HoldNumbers.prototype.addMultiples = function() {
  for (let i = 0; i < this.array.length; i++) {
    this.sum = this.sum + this.array[i];
    }
    return this.sum;
}