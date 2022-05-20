require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.listen(PORT || 8000, () =>
  console.log(`Server is running on port ${PORT}`)
);
