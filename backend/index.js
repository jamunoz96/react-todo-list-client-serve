const cors = require("cors");
const todos = require("./routes/todos");
const signUp = require("./routes/signUp");
const signIn = require("./routes/signIn");
const express = require("express");
const mongoose = require("mongoose");
const ExpressRedisCache = require('express-redis-cache')


require("dotenv").config();

const app = express();
const cache = ExpressRedisCache({
  expire: 10,
  host: 'redis',
  port: 6379
})

app.use(express.json());
app.use(cors());

app.use("/api/v1/todos", cache.route(), todos);
app.use("/api/v1/signup", cache.route(), signUp);
app.use("/api/v1/signin", cache.route(), signIn);

app.get("/", (req, res) => {
  res.send("welcome to the todos api...");
});

const uri = process.env.MONGO_DB_URI;
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
