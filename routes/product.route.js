const express = require("express");
const { allProducts } = "../controllers/product";

const router = express.Router();

router.get("/", allProducts);

module.exports = router;
