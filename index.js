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
app.get("/dashboard/seller/verify/:email", verifyseller);

// Admin Routes
app.get("/dashboard/admin/alluser", verifyUser, verifyToken, alluser);
// Payment Routes

// Listen
app.listen(process.env.PORT || 5000, () => {
  dbConnected();
  ("app running");
});
