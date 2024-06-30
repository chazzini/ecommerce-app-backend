const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

const product_route = require("./routes/Product");
const port = 3000;

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connect database");
  })
  .catch((err) => {
    throw new Error("Unable to connect to database with error " + err);
  });

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({}));

app.use("/api/products", product_route);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
