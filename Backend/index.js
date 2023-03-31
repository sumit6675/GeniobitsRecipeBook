require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./config/db");
const { usersRoute } = require("./Routes/users.routes");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Geniobits Recipe Book");
});

app.use("/users",usersRoute)

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Coonected to the database");
  } catch (err) {
    console.log("err", err);
  }
  console.log(`Server is live at PORT : 8080`);
});