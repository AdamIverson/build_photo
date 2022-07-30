const express = require("express");
const bodyParser = require("body-parser");
const { cloudinary } = require("./utils/cloudinary");
require("dotenv").config({
  path: "./server/.env",
});
const pool = require("./modules/pool");
const path = require("path");
const app = express();
const cloudURL = process.env.CLOUDINARY_URL

//This will create a middleware
//When you navigate to the root page, it would use the built react-app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Body parser middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const templateRouter = require("./routes/template.router");
app.use("/api/template", templateRouter);

const googleRouter = require("./routes/google.router");
app.use(`/api/google`, googleRouter);

const contactRouter = require("./routes/contact.router");
app.use("/api/contact_form", contactRouter);

const italyRouter = require("./routes/italy.router");
app.use("/api/italy", italyRouter);

const uploadRouter = require("./routes/upload.router");
app.use("/api/upload", uploadRouter);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.get(`/api/testFolder1000`, async (req, res) => {
  const {resources} = await cloudinary.search
    .expression('folder:MAYDAY2017')
    .sort_by('public_id', 'desc')
    .execute();

  const publicIds = resources.map( file => file.public_id);
  res.send(publicIds);
});

// Serve static files
// app.use(express.static("build"));

// const port = process.env.PORT || 3001;


let port = process.env.PORT;
if (port == null || port == "") {
  port = 80;
}
else if (port === "production") {
  app.use(express.static("client/build"));
};
app.use(routes);


app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
