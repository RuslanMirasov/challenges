const { getAllProducts } = require("@/services/productServices");

const handler = (req, res) => {
  const allProducts = getAllProducts();
  res.status(200).json(allProducts);
};

export default handler;
