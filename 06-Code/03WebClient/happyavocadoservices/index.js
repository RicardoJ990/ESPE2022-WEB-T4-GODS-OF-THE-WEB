const port = 8081
const express =require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const nodemon = require("nodemon");

mongoose.connect(`mongodb+srv://grupo4nrc5450:grupo4nrc5450@clusterg4.q6pz6.mongodb.net/fruitshopdb?retryWrites=true&w=majority`, { useNewUrlParser: true});

const db = mongoose.connection; 

db.on("error", (error) => crossOriginIsolated.error(error));
db.once("open", () => console.log ("System connected to MongoDB Database"));

app.use(express.json());

const productRouter = require("./routes/productRoutes");
const providerRouter = require("./routes/providerRoutes");
const orderRouter = require("./routes/orderRoutes");


app.use("/happyavocado", productRouter);
app.use("/happyavocado", providerRouter);       
app.use("/happyavocado", orderRouter);

app.listen(port, () => console.log ("Server is running on port: " + port));
