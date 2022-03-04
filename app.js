require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const app = express();

app.use("/api", authRoutes);
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("DB Connected");
  })
  .catch(() => console.log("Unable to connect DB"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Find Me");
});

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
