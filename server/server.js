const express = require("express");
const { cloudinary } = require("./utils/cloudinary");
require("dotenv").config({
  path: "./server/.env",
});
const pool = require("./modules/pool");

const app = express();

const testRouter = require("./routes/test.router");

app.use("/api/test", testRouter);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.post("/api/upload", async (req, res) => {
  
  try {
    const fileStr = req.body.data;
    // console.log('fileStr:', fileStr);
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "testFolder1000",
    });
    console.log("uploadedResponse.public_id:", uploadedResponse.public_id);
    const queryText = `
        INSERT INTO "images" ("title", "cloudinary_id", "image_url")
        VALUES ($1, $2, $3)
      `;
    const queryValues = [
      uploadedResponse.asset_id,
      uploadedResponse.public_id,
      uploadedResponse.url,
    ];
    console.log('queryValues:', queryValues);
    await pool
      .query(queryText, queryValues)
      .then(() => res.sendStatus(201))
      .catch((error) => {
        console.log("error POST fav", error);
        res.sendStatus(500);
      });
    // res.json({ msg: "YAY" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "bad news" });
  }
});

// Serve static files
app.use(express.static("build"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
