require("dotenv").config();

const express = require("express");

const sequelize = require("./src/config/db.js");
const port = process.env.PORT;
const app = express();

sequelize.authenticate()
  .then(() => {
    console.warn("MY-SQL connected successfully.")
  })
  .catch(err => console.error(err));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});