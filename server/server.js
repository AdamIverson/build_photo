const express = require("express");
const { cloudinary } = require("./utils/cloudinary");
require('dotenv').config();

const app = express();

// const testRouter = require('./routes/test.router'); 
// app.use('/api/test', testRouter);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.post("/api/upload", async (req, res) => {
  console.log('process.env.CLOUDINARY_API_KEY: ', process.env.CLOUDINARY_API_KEY);
  try {
    const fileStr = req.body.data;
    // console.log('fileStr:', fileStr);
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'testFolder1000'
    }); 
    console.log("uploadedResponse:", uploadedResponse);
    res.json({ msg: "YAY" });
  } catch (error) {
    console.error(error);
    res.status(500).json({err: 'bad news'})
  }
});

// Serve static files
app.use(express.static('build'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});