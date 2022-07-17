const express = require("express");
const bodyParser = require("body-parser");
const { cloudinary } = require("./utils/cloudinary");
require("dotenv").config({
  path: "./server/.env",
});
const pool = require("./modules/pool");

const app = express();

// Body parser middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const templateRouter = require("./routes/template.router");
app.use("/api/template", templateRouter);

const googleRouter = require("./routes/google.router");
app.use("/api/google", googleRouter);

const contactRouter = require("./routes/contact.router");
app.use("/api/contact_form", contactRouter);

const italyRouter = require("./routes/italy.router");
app.use("/api/italy", italyRouter);

const uploadRouter = require("./routes/upload.router");
app.use("/api/upload", uploadRouter);

const fileDetailRouter = require("./routes/fileDetail.router");
app.use("/api/fileDetail", fileDetailRouter);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// app.get("/api/testFolder1000", async (req, res) => {
//   const {resources} = await cloudinary.search
//     .expression('folder:MAYDAY2017')
//     .sort_by('public_id', 'desc')
//     .execute();

//   const publicIds = resources.map( file => file.public_id);
//   res.send(publicIds);
// });

// Serve static files
app.use(express.static("build"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
