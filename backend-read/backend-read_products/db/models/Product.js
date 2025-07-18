import mongoose from "mongoose";
import "./Review";
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number },
  currency: { type: String },
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" }, // this is for bonus
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
