import express from "express";

import {
  insertBookmark,
  getBookmarks,
  getBookmark,
} from "../model/bookmarks.js";
const router = express.Router();

router.post("/create", async (req, res) => {
  const insertedId = await insertBookmark(req.body.bookmark);
  res.send({
    id: insertedId,
    bookmark: req.body.bookmark,
  });
});

router.get("/", async (_, res) => {
  const bookmarks = await getBookmarks();
  res.send({ bookmarks });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const bookmark = await getBookmark(id);
  res.send({ id, bookmark });
});

export default router;
