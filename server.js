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

app.post("/quotes/create", (req, res) => {
  console.log(req.body);
  const mongoClient = mongodb.MongoClient;
  mongoClient.connect(process.env.MONGODB_URI, (err, client) => {
    if (err) {
      return console.error(err);
    }
    console.log("Connected to Database");
  });

  res.send({ message: "Quote was created" });
});
