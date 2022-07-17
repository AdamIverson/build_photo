const express = require("express");
const { cloudinary } = require("../utils/cloudinary");
const pool = require("../modules/pool");
const router = express.Router();

router.post('/', async (req, res) => {

  console.log("fileDetail req.body.data.altText:", req.body.data.altText);

  try {
    const queryText = `
      INSERT INTO "images" ("altText")
      VALUES ($1)
    `;
    const queryValues = [
      req.body.altText
    ];
    await pool
      .query(queryText, queryValues)
      .then(() => res.sendStatus(201))
      .catch((error) => {
        console.log("error POST fileDetail", error);
      })
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "fileDetail bad news" });
  }
})

module.exports = router;