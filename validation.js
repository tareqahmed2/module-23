function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return `please provide a number `;
  }
  const mult = num1 * num2;
  return mult;
}

const result = multiply("seven", "four");
console.log(result);

function fullName(first, second) {
  if (typeof first !== "string" || second !== "string") {
    return "please provide a string";
  }
  const full = first + "" + second;
  return full;
}
const full = fullName("rahan", 5);
console.log(full);

function getPrice(product) {
  // console.log(typeof product);
  if (typeof product !== "object") {
    return `please provide an object`;
  }
  const price = product.price;
  return price;
}

// const price = getPrice({ name: "chukani dandi", price: 35, color: "blue" });
const price = getPrice(5);

function getSecond(numbers) {
  // console.log(Array.isArray(numbers));
  if (Array.isArray(numbers) === false) {
    return "please provide an array";
  }
  const second = numbers[1];
  return second;
}
const second = getSecond([1, 25, 69]);
console.log(second);
console.log(price);
