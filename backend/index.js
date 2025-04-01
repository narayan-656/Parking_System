const mongoose = require("mongoose")
const express = require("express");

const  cors = require("cors")

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors())


app.use(express.json());

const {rootRouter} = require("./routes/index");

app.use("/api/v1",rootRouter);

async function main() {
    app.listen(3000);
    console.log("hosting on http://localhost:3000");
    await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log("mongoose connected")
}

main();