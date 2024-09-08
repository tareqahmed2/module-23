// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     // mobile = 20000 tk

function totalCost(laptop, tablet, mobile) {
  let laptopPrice = 35000;
  let tabletPrice = 15000;
  let mobilePrice = 20000;

  laptopPrice *= laptop;
  tabletPrice *= tablet;
  mobilePrice *= mobile;
  const total = laptopPrice + tabletPrice + mobilePrice;

  console.log(
    `the laptop price is =${laptopPrice} tk\nthe table price is =${tabletPrice} tk\nthe mobile price is =${mobilePrice} tk\n`
  );
  console.log(`the total price of all electronics devices=${total} tk`);
}
const quantity = totalCost(2, 4, 5);
