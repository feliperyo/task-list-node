const express = require("express");
const cors = require("cors");
const uuid = require("uuid");

const app = express();
app.listen(3001);
app.use(express.json());
app.use(cors());

const tasks = [];

app.get("/tasks", (request, response) => {
  return response.json(tasks);
});

app.post("/tasks", (request, response) => {
  const { newTask } = request.body;

  const task = { id: uuid.v4(), name: newTask };
  tasks.push(task);

  return response.status(201).json(task);
});
