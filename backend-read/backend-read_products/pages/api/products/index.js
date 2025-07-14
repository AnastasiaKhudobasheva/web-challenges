import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const products = await Product.find();
    return res.status(200).json(products);
  }

  if (req.method === "POST") {
    try {
      const productData = req.body;
      await Product.create(productData);
      return res.status(201).json({ status: "Product created." });
    } catch (error) {
      console.error("Error creating product:", error);
      return res.status(400).json({ error: error.message });
    }
  }

  return res.status(405).json({ message: "Method not allowed" });
}
