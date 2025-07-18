import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");
    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }
    return response.status(200).json(product);
  }

  if (request.method === "PUT") {
    const updatedProduct = request.body;
    try {
      await Product.findByIdAndUpdate(id, updatedProduct);
      return response
        .status(200)
        .json({ status: "Product successfully updated." });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "DELETE") {
    try {
      await Product.findByIdAndDelete(id);
      return response
        .status(200)
        .json({ status: "Product successfully deleted." });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }

  response.status(405).json({ status: "Method not allowed." });
}
