const products = [{
        name: "shampoo",
        price: 300,
        quantity: 2,
    },
    {
        name: "chiruni",
        price: 100,
        quantity: 3,
    },
    {
        name: "shirt",
        price: 700,
        quantity: 5,
    },
    {
        name: "pant",
        price: 1200,
        quantity: 1,
    },
];

function getShopingTotal(products) {
    let total = 0;
    for (const product of products) {
        // console.log(product);
        total += product.price;
    }
    return total;
}
const total = getShopingTotal(products);
console.log(`total price:${JSON.stringify(total)}`);

function cartTotal(products) {
    let totalQuantity = 0;
    for (const product of products) {
        // console.log(product);
        const thisproductCost = product.price * product.quantity;
        totalQuantity += thisproductCost;
    }
    return totalQuantity;
}
const shoppingCost = cartTotal(products);
console.log(shoppingCost);