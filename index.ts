import express from "express";

const app = express();

app.use(express.json());

const port = 3000;

app.listen(port, () => {
  console.log("listening...");
});

app.get("/", (req, res) => {
  res.send("Hello");
});
