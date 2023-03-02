const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
var bodyParser = require('body-parser');

const MONGODB_URL = 'mongodb+srv://admin:admin@portify.fpzijgb.mongodb.net/assignment'

const app = express();
app.use(express.json());


app.use(
    "/build",
    express.static(__dirname)
);
app.use(cors({ origin: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//database
mongoose
    .connect(MONGODB_URL, {
        useNewUrlParser: true,
    })
    .then(() => console.log("database connected successfully"))
    .catch((err) => console.log("error connecting to mongodb", err));



//user routes
app.use("/", require("./user/userRoutes.js"))

app.use("/", require("./contact/contactRoutes.js"))



app.listen(5001, () => {
    console.log(`server is running on port 5001..`);
});
// module.exports = app;