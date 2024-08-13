const products = [
  { name: "Saffron", price: 50 },
  { name: "Cinnamon", price: 6 },
  { name: "Cardamom", price: 12 },
  { name: "Turmeric", price: 9 },
  { name: "Paprika", price: 4 },
  { name: "Garam Masala", price: 10 },
  { name: "Vanilla Bean", price: 15 },
  { name: "Coriander", price: 6 },
];

function extractPrice(product) {
  return product.price;
}

const calculateTotalPrice = (products, extractPrice) => {
  let totalPrice = 0;
  for (product of products) {
    totalPrice += extractPrice(product);
  }
  return totalPrice;
};

console.log(calculateTotalPrice(products, extractPrice));
