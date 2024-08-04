const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const businessRoutes = require("./routes/businessRoutes");

app.use(cors());
app.use(bodyParser.json());

app.use("/api/businesses", businessRoutes);

module.exports = app;
