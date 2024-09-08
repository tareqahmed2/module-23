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

function getCheapestPhone(phones) {
    // console.log(phones);
    let min = phones[0];
    for (const phone of phones) {
        // console.log(phone);
        if (phone.price < min.price) {
            min = phone;
        }
    }
    return min;
}
const cheap = getCheapestPhone(mobiles);
console.log(`cheapest phone is:${JSON.stringify(cheap)}`);