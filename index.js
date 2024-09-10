const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const todoRoutes = require('./routes/todoRoutes.js');

const app = express();

dotenv.config();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send("This is a To-Do App API")
})

app.use('/todo', todoRoutes);

const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL)
    .then(() => app.listen(PORT, () =>
        console.log(`To-Do App API listening on port ${PORT}!`),
    ))
    .catch((err) => console.log(err.message));