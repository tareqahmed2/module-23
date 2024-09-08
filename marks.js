const disha = 56;
const salman = 34;
if (disha > salman) {
    console.log(`disha will get the strovery`);
} else {
    console.log(`salman will eat the strawberry`);
}

// inside a function
function getMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
const max = getMax(56, 88);
console.log(`max ofthe tow is :${max}`);