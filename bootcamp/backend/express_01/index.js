import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Express!");
});

app.get("/hello", (req, res) => {
  res.send("Hello there!");
});

app.post("/say-hello", (req, res) => {
  const { name } = req.body;
  res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
