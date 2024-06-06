const myNums = [1, 2, 3, 4];

const myTotal = myNums.reduce((acc, currVal) => {
  console.log(`Acc: ${acc} and current value: ${currVal}`);
  return acc + currVal;
}, 0); // accumulator = 0
console.log("MyTotal: ", myTotal);

const shoppingCart = [
  {
    itemName: "js course ",
    price: 2999,
  },
  {
    itemName: "java course ",
    price: 4999,
  },
  {
    itemName: "python course ",
    price: 1999,
  },
  {
    itemName: "mobile course ",
    price: 5999,
  },
  {
    itemName: "data science course ",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay); // 28995
