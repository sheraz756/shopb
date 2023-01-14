const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
const bcryptjs = require("bcryptjs");
const cors = require("cors");
const corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOption));

dotenv.config({ path: "./config.env" });
require("./db/conn");
app.use(require("./routers/auth"));
app.use(require("./routers/posts"));
app.use(require("./routers/user"));
// const User = require('./models/userSchema');
const PORT = process.env.PORT;

app.listen(process.env.PORT || 3000, () =>
  console.log(`listening to port ${PORT}`)
);
