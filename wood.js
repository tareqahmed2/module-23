/** chair 3cft
 * talbe 10 cft
 * bed 50cft
 */
function woodQuantity(chairQuantity, table, bed) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const allChairWood = chairQuantity * perChairWood;
    const allTableWood = table * perTableWood;
    const allBedWood = bed * perBedWood;
    const totalWood = allChairWood + allTableWood + allBedWood;
    return totalWood;
}

const wood = woodQuantity(0, 0, 1);
console.log(`the totalwood is  ${wood} cft`);