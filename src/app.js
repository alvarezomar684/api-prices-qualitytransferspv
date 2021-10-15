
const express = require("express");
const sedanusRoutes = require("./routes/sedanus.routes")


const app = express();

app.use(express.json());//para que el servidor pueda procesar ese body

app.use("/api/v1", sedanusRoutes);




module.exports = app;

