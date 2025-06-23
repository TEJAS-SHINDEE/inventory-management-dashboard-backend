// controllers/productController.js
import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  const products = await Product.find({ createdBy: req.user.id });
  res.json(products);
};

export const addProduct = async (req, res) => {
  const { name, quantity, price, category } = req.body;
  const product = await Product.create({
    name,
    quantity,
    price,
    category,
    createdBy: req.user.id,
  });
  res.json(product);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updated = await Product.findOneAndUpdate(
    { _id: id, createdBy: req.user.id },
    req.body,
    { new: true }
  );
  res.json(updated);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.findOneAndDelete({ _id: id, createdBy: req.user.id });
  res.json({ msg: "Deleted" });
};
