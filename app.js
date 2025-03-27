const express = require("express");
const connectDB = require("./config");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to Database
connectDB();

// Set View Engine & Views Directory
app.set("view engine", "ejs");
app.set("views", "./views");

// Middleware
app.use(express.static("public")); // Serves static files (CSS, JS, images)
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data
app.use(express.json()); // Parse JSON data from requests

// Routes
app.use("/", userRoutes);

// Error Handling Middleware (Handles 404 Errors)
app.use((req, res) => {
    res.status(404).render("404", { message: "Page Not Found" }); // Create a "404.ejs" file in views
});

// Start Server
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
