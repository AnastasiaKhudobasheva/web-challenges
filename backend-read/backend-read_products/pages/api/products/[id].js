import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "GET") {
    const product = await Product.findById(id).populate("reviews"); // this is for bonus
    if (!product) {
      return res.status(404).json({ message: "Not Found" });
    }
    return res.status(200).json(product);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
