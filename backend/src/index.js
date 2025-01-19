const express = require("express");
const cors = require("cors");
const UserRoute = require("../routes/user_route");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/tasks", UserRoute);

const server = app.listen(5000, () =>
  console.log(`🚀 Server ready at: http://localhost:5000`)
);
