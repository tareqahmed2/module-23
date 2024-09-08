/**
 * first 100-->100
 * 101to 2000 --->90
 * avobe 200--->70
 *
 */

function layeredDiscountTotal(quantity) {
    const first100Pirce = 100;
    const second100Price = 90;
    const above200Pirce = 70;

    if (quantity <= 100) {
        const total = quantity * first100Pirce;
        return total;
    } else if (quantity <= 200) {
        const first100Total = 100 * first100Pirce;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;

        const total = first100Total + remainingTotal;
        return total;
    } else {
        const first100toal = 100 * first100Pirce;
        const second100total = 100 * second100Price;
        const remainingQuantity = quantity - 200;
        const remainingTotal = remainingQuantity * above200Pirce;
        const total = first100toal + second100Price + remainingTotal;
        return total;
    }
}

const price = layeredDiscountTotal(300);
console.log(price);