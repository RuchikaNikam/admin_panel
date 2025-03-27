const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Homepage Route (Fix for 404)
router.get("/", (req, res) => {
    res.send("<h1>Welcome to Admin Panel</h1>"); // Or render an EJS file
});

// Users Page Route
router.get("/users", userController.getUsersPage);

module.exports = router;
