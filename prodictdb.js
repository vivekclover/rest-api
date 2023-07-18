
require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/pr");

const ProductJson = require("./prodict.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();