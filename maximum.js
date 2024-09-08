const mobiles = [{
        name: "samsumg",
        price: 20000,
        camera: "12mp",
        color: "black",
    },
    {
        name: "xiaomi",
        price: 18000,
        camera: "12mp",
        color: "black",
    },
    {
        name: "oppo",
        price: 30000,
        camera: "12mp",
        color: "black",
    },
    {
        name: "iphone",
        price: 100000,
        camera: "12mp",
        color: "black",
    },
    {
        name: "walton",
        price: 31000,
        camera: "12mp",
        color: "black",
    },
    {
        name: "oneplus",
        price: 20000,
        camera: "12mp",
        color: "black",
    },
];

function priceCalc(phones) {
    // console.log(phones);
    let higestPrice = phones[0];
    for (const phone of phones) {
        if (phone.price > higestPrice.price) {
            higestPrice = phone;
        }
    }
    return higestPrice;
}

const highest = priceCalc(mobiles);
console.log(
    `the highest prices phone from this object that is : ${JSON.stringify(
    highest
  )}`
);