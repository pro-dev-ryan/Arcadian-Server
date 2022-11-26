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
// app initialization
app.get("/", (req, res) => {
  console.log(test);
  res.send("Server is ok, No issues");
});

// basic routes
app.post("/users", userCreation);
app.get("/issueToken", getToken);
app.get("/loginuser", verifyUser);

// dashboard routes
app.post("/addproduct", verifyToken, pdpost);

// Admin Routes

// Payment Routes

// Listen
app.listen(process.env.PORT || 5000, () => {
  dbConnected();
  ("app running");
});
