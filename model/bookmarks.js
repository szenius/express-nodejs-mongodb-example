import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = await mongodb.MongoClient.connect(process.env.MONGODB_URI);
const db = client.db("bookmarks");

export const insertBookmark = async (bookmark) => {
  const { insertedId } = await db
    .collection("bookmarks")
    .insertOne({ bookmark });
  return insertedId;
};

export const getBookmark = async (id) => {
  const { bookmark } = await db
    .collection("bookmarks")
    .findOne({ _id: new mongodb.ObjectId(id) });
  return bookmark;
};

export const getBookmarks = async () => {
  const bookmarks = await db.collection("bookmarks").find().toArray();
  return bookmarks.map(({ _id, bookmark }) => ({
    id: _id,
    bookmark,
  }));
};
