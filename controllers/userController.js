const User = require("../models/userModel");

exports.getUsers = async (req, res) => {
  try {
    let { page, search } = req.query;
    page = parseInt(page) || 1;
    const limit = 5; // Users per page

    let query = {};
    if (search) {
      query = { name: new RegExp(search, "i") }; // Case-insensitive search
    }

    const totalUsers = await User.countDocuments(query);
    const users = await User.find(query)
      .limit(limit)
      .skip((page - 1) * limit);

    res.render("users", {
      users,
      currentPage: page,
      totalPages: Math.ceil(totalUsers / limit),
      searchQuery: search || "",
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Server Error");
  }
};
