const { MongoClient } = require("mongodb");
require("dotenv").config();
const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@cluster0.3vovbw8.mongodb.net/test`;
const client = new MongoClient(uri);
const secondHand = client.db("secondHand");
const user = client.db("secondHand").collection("user");

console.log(process.env.DB_User);

const dbConnected = () => {
  try {
    client.connect((err) => {
      if (!err) {
        console.log("database connected");
      } else {
        console.log(err);
      }
    });
  } catch (error) {
    console.error(error);
  }
};
exports.dbConnected = dbConnected;
exports.db = { secondHand, user };
