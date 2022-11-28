const express = require("express");
const cors = require("cors");
const { dbConnected } = require("./database/dbConns");
const app = express();
// middleware
app.use(cors());
app.use(express.json());

// router modules
const userCreation = require("./routes/UserOperation");
const getToken = require("./middleware/jwtIssue");
const verifyUser = require("./routes/verifyUser");
const pdpost = require("./middleware/postOperation");
const verifyToken = require("./middleware/verifytoken");
const alluser = require("./routes/allusers");
const allproduct = require("./middleware/allproduct");
const verifyseller = require("./routes/verifyseller");
const category = require("./routes/category");
const byCategory = require("./middleware/getProductbycategory");
const adminchecker = require("./middleware/adminchecker");
const isAdmin = require("./routes/isAdmin");
const deleteme = require("./middleware/deleteOperation.js");
// app initialization
app.get("/", (req, res) => {
  res.send("Server is ok, No issues");
});

// basic routes
app.post("/users", userCreation);
app.get("/issueToken", getToken);
app.get("/loginuser", verifyUser);
app.get("/allproducts", allproduct);
app.get("/category", category);
app.get("/shop/category/:type", byCategory);

// dashboard routes
app.post("/addproduct", verifyToken, pdpost);
app.get("/dashboard/seller/verify/:email", verifyToken, verifyseller);

// Admin Routes
app.get(
  "/dashboard/admin/alluser",
  verifyUser,
  adminchecker,
  verifyToken,
  alluser
);

app.delete("/delete", verifyToken, isAdmin, deleteme);

app.get("/dashboard/admin/:email", verifyToken, isAdmin);
// Payment Routes

// Listen
app.listen(process.env.PORT || 5000, () => {
  dbConnected();
  ("app running");
});
