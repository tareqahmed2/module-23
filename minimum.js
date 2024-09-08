const prices = [20000, 16000, 500000, 100000, 12000, 30000, 35000];

function minCalc(prices) {
    let min = prices[0];
    for (const pri of prices) {
        if (prices[0] > pri) {
            min = pri;
        }
    }
    return min;
}

const minimum = minCalc(prices);
console.log(`the lowest price of this prices is =${minimum}`);