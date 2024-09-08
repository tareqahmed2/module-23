const jim = 56;
const tim = 89;
const kim = 68;

if (jim > tim && jim > kim) {
    console.log(`jim is the ultimate boss`);
} else if (tim > jim && tim > kim) {
    console.log(`tim is the boss`);
} else {
    console.log(`kim is the boss`);
}

function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(`num1 is the boss`);
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        console.log(`num2 is the boss`);
        return num2;
    } else {
        console.log(`num3 is the boss`);
        return num3;
    }
}

const max = maxOfThree(3, 5, 2);
console.log(max);

const max1 = Math.max(12, 1, 1, 2, 45, 2);
console.log(max1);