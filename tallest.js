const heights = [45, 77, 66, 88, 50, 50, 64, 64];

function getMax(numbers) {
    // console.log(numbers);
    let max = numbers[0];

    for (const num of numbers) {
        // console.log(num);
        if (num > max) {
            max = num;
        }
    }
    return max;
}

const max = getMax(heights);
console.log(`max value is ${max}`);