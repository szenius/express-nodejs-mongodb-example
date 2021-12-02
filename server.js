import express from "express";
import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

app.listen(3000, function () {
  console.log("listening on 3000");
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/quotes/create", async (req, res) => {
  const client = await mongodb.MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db("quotes");
  const { insertedId } = await db.collection("quotes").insertOne(req.body);
  res.send({ message: "Quote was created", quoteId: insertedId });
});

app.get("/quotes", async (_, res) => {
  const client = await mongodb.MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db("quotes");
  const quotes = await db.collection("quotes").find().toArray();
  res.send({ quotes });
});

app.get("/quotes/:id", async (req, res) => {
  const quoteId = req.params.id;
  const client = await mongodb.MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db("quotes");
  const { quote } = await db
    .collection("quotes")
    .findOne({ _id: new mongodb.ObjectId(quoteId) });
  res.send({ id: quoteId, quote });
});
