const express = require("express");
const cors = require("cors");
const uuid = require("uuid");

const app = express();
app.listen(3001);
app.use(express.json());
app.use(cors());

const list = [];

app.get("/tasks", (request, response) => {
  return response.json(list);
});

app.post("/tasks", (request, response) => {
  const { task } = request.body;

  list.push({ id: uuid.v4(), task });

  return response.status(201).json(list);
});
