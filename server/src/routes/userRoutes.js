const express = require("express");
const router = express.Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");
const { getUsers } = require("../controllers/userController");

// Protected route
router.get("/", protect, adminOnly, getUsers);

module.exports = router;