const express = require("express");
require('dotenv').config();

const app = express();

const testRouter = require('./routes/test.router'); 

app.use('/api/test', testRouter);

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// // Body parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});