const express = require("express");
const bodyParser = require("body-parser");
const { cloudinary } = require("./utils/cloudinary");
require("dotenv").config({
  path: "./server/.env",
});
const pool = require("./modules/pool");

const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const templateRouter = require("./routes/template.router");
app.use("/api/template", templateRouter);

const googleRouter = require("./routes/google.router");
app.use("/api/google", googleRouter);

const contactRouter = require("./routes/contact.router");
app.use("/api/contact_form", contactRouter);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.get("/api/testFolder1000", async (req, res) => {
  const {resources} = await cloudinary.search
    .expression('folder:MAYDAY2017')
    .sort_by('public_id', 'desc')
    .execute();

  const publicIds = resources.map( file => file.public_id);
  res.send(publicIds);
});

// app.post("/api/contact_form", (req, res) => {
//   console.log("contact_form");
// });

app.post("/api/upload", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "testFolder1000",
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

// Serve static files
app.use(express.static("build"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
