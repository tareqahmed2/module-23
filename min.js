const weights = [45, 77, 66, 33, 88, 50, 50, 64, 64];

function minCalc(weight) {
    let min = weight[0];
    for (const wei of weight) {
        if (weight[0] > wei) {
            min = wei;
        }
    }
    return min;
}

const min = minCalc(weights);
console.log(`min weigth form there is :${min}`);