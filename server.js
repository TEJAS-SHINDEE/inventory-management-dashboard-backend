import express from "express";
import cors from "cors";
import mongoose from "mongoose"; 

import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();

app.use(cors({ origin: ["http://localhost:5173","https://inventory-management-dashboard-fron-eight.vercel.app","*","https://inventory-management-dashboard-frontend-mnxh662uu.vercel.app","https://inventory-management-dashboard-fron.vercel.app"], credentials: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is live");
});

app.use("/api/auth", authRoutes);

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;



mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log(err));
