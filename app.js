const express = require("express");
const connectDB = require("./config");
const userRoutes = require("./routes/userRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
