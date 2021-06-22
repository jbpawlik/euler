export default function HoldNumbers() {
  this.numberDivided = 0;
}

HoldNumbers.prototype.divide = function(num) {
  this.numberDivided = Math.round(num / 3);
  return this.numberDivided;
};

HoldNumbers.prototype.multiplyBy3 = function() {
  this.array = [];
  for (let i = 1; i <= this.numberDivided; i++) {
    this.array.push(i * 3);
    console.log(this.array);
  }
  return this.array;
};