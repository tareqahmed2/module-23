// Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

function minCalc(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    // console.log(num);
    if (min > num) {
      min = num;
    }
  }
  return min;
}

const minimum = minCalc(heights2);
console.log(`the minimum number from this array is =${minimum}`);
