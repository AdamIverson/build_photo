const express = require("express");
const { cloudinary } = require("../utils/cloudinary");
const pool = require("../modules/pool");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "uploads",
    });
    const queryText = `
        INSERT INTO "images" ("title", "cloudinary_id", "image_url")
        VALUES ($1, $2, $3)
      `;
    const queryValues = [
      uploadedResponse.asset_id,
      uploadedResponse.public_id,
      uploadedResponse.url,
    ];
    await pool
      .query(queryText, queryValues)
      .then(() => res.sendStatus(201))
      .catch((error) => {
        console.log("error POST fav", error);
        res.sendStatus(500);
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "bad news" });
  }
});

module.exports = router;