import express from "express";

const app = express();

app.use(express.json());

app.listen(3000, function () {
  console.log("listening on 3000");
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/quotes/create", (req, res) => {
  console.log(req.body);
  res.send({ message: "Quote was created" });
});
