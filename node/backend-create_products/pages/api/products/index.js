import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  //  ---GET---  OLL PRODUCTS
  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }

  //  ---POST--- A NEW PRODUCT
  if (request.method === "POST") {
    try {
      const productData = request.body;
      await Product.create(productData);
      return response.status(201).json({ status: "Product created." });
    } catch (error) {
      console.error("Error creating product:", error);
      return response.status(400).json({ error: error.message });
    }
  }
}
