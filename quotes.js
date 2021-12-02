import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = await mongodb.MongoClient.connect(process.env.MONGODB_URI);
const db = client.db("quotes");

export const insertQuote = async (quote) => {
  const { insertedId } = await db.collection("quotes").insertOne({ quote });
  return insertedId;
};

export const getQuote = async (id) => {
  const { quote } = await db
    .collection("quotes")
    .findOne({ _id: new mongodb.ObjectId(id) });
  return quote;
};

export const getQuotes = async () => {
  const quotes = await db.collection("quotes").find().toArray();
  return quotes.map(({ _id, quote }) => ({
    id: _id,
    quote,
  }));
};
