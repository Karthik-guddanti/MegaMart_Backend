const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Routes → /api/products
router.post("/", createProduct);      // Create
router.get("/", getProducts);         // Read all
router.get("/:id", getProductById);   // Read one
router.put("/:id", updateProduct);    // Update
router.delete("/:id", deleteProduct); // Delete

module.exports = router;
