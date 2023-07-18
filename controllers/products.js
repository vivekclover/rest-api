const Product = require("../models/pr");
const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  console.log("🚀 ~ file: products.js ~ line 5 ~ getAllProducts ~ sort", sort);
  const queryObject = {};

  if (company) {
    queryObject.company = company;
  }

  if (featured) {
    queryObject.featured = featured;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let apiData = Product.find(queryObject);

  if (sort) {
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  // (select = name company;
  if (select) {
    // let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = req.query.limit || 3;

  skip = (page - 1) * limit;

  if (req.query.limit) {
    apiData = apiData.skip(skip).limit(limit);
  }

  console.log(queryObject);  

  const myData = await apiData;
  console.log("STATUS 200",req.query);
  const Data = await Product.find(req.query);
    res.status(200).json({ Data });
  };
  
  const getAllProductsTesting = async (req, res) => {
    console.log(req.query);
  const myData = await Product.find(req.query);
    res.status(250).json({myData });
  };
  
  module.exports = { getAllProducts, getAllProductsTesting };
  