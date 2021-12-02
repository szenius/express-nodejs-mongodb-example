import express from "express";
import { getQuote, getQuotes, insertQuote } from "./quotes.js";

const app = express();

app.use(express.json());

app.listen(3000, function () {
  console.log("listening on 3000");
});

app.get("/", function (_, res) {
  res.send("Welcome to the quotes app!");
});

app.post("/quotes/create", async (req, res) => {
  const insertedId = await insertQuote(req.body.quote);
  res.send({
    id: insertedId,
    quote: req.body.quote,
  });
});

app.get("/quotes", async (_, res) => {
  const quotes = await getQuotes();
  res.send({ quotes });
});

app.get("/quotes/:id", async (req, res) => {
  const id = req.params.id;
  const quote = await getQuote(id);
  res.send({ id, quote });
});
