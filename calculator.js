function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divided(num1, num2) {
    return num1 / num2;
}

function calculator(a, b, operation) {
    if (operation === "add") {
        const result = add(a, b);
        return result;
    } else if (operation === "subtract") {
        const result = subtract(a, b);
        return result;
    } else if (operation === "multiply") {
        return multiply(a, b);
    } else if (operation === "divided") {
        return divided(a, b);
    } else {
        return 'only "add","subtract","multiply","divided" operation are allowed';
    }
}
const result = calculator(5, 7, "subtract");
console.log(result);