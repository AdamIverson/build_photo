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
        INSERT INTO "images" ("title", "cloudinary_id", "image_url", "altText", "poem")
        VALUES ($1, $2, $3, $4, $5)
      `;
    const queryValues = [
      uploadedResponse.asset_id,
      uploadedResponse.public_id,
      uploadedResponse.url,
      req.body.altText,
      req.body.poem
    ];
    console.log("req.body.poem:", req.body.poem);
    await pool
      .query(queryText, queryValues)
      .then(() => res.sendStatus(201))
      .catch((error) => {
        console.log("error POST upload", error);
        res.sendStatus(500);
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "bad news" });
  }
});

module.exports = router;