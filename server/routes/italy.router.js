const express = require("express");
const { cloudinary } = require("../utils/cloudinary");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", async (req, res) => {
  const {resources} = await cloudinary.search
    .expression('folder:italy')
    .sort_by('public_id', 'desc')
    .execute();

  const publicIds = resources.map( file => file.public_id);
  res.send(publicIds);
});

module.exports = router;