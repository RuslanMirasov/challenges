const { getProductById } = require("@/services/productServices");

const handler = (req, res) => {
  const { id } = req.query;
  const singleProduct = getProductById(id);
  if (singleProduct) {
    res.status(200).json(singleProduct);
    return;
  }
  res.status(404).json({ messege: "Product not found!" });
};

export default handler;
