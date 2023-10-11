const express = require("express");
const { CreateUser } = require("../controllers/user_controller");

const router = express.Router();

router.post("/create", CreateUser);

module.exports = router;
