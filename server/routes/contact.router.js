const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

// router.post("/", (req, res) => {
//   console.log("success");
// })

router.post("/", async (req, res) => {
  const query = `
  INSERT INTO "contact_form" ("from", "message")
  VALUES ($1, $2)
  `;

  const values = [req.body.data.from, req.body.data.message]

  await pool
    .query(query, values)
    .then(() => res.sendStatus(201))
    .catch((error) => {
      console.log("error POST fav", error);
      res.sendStatus(500);
    });
});

module.exports = router;