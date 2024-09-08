/** shirt price 500
 * pant price 300
 * shoe price 900
 */
function marketPrice(shirtPrice, pantPrice, shoePrice) {
    const shirtTotalPrice = shirtPrice * 500;
    const pantTotalPrice = pantPrice * 300;
    const shoeTotalPrice = shoePrice * 900;

    const totalPrice = shoeTotalPrice + pantTotalPrice + shoeTotalPrice;
    return totalPrice;
}

const needPantShirtShoe = marketPrice(4, 3, 2);
console.log(`the total bill of you is : =${needPantShirtShoe}`);