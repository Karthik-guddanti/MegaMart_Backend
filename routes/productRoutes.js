const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Ensure all controller functions are defined
if (
  !createProduct ||
  !getProducts ||
  !getProductById ||
  !updateProduct ||
  !deleteProduct
) {
  throw new Error("One or more product controller functions are missing.");
}

// Routes → /api/products
router.post("/", createProduct);      // Create
router.get("/", getProducts);         // Read all
router.get("/:id", getProductById);   // Read one
router.put("/:id", updateProduct);    // Update
router.delete("/:id", deleteProduct); // Delete

module.exports = router;
