const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get('/', (req, res) => {

  // res.send('res.send from test.router')
  console.log('test.router');

  pool
  .query (`SELECT * FROM "test";`)
  .then ((results) => res.send(results.rows))
  .catch ((error) => {
    console.log('ERROR SELECTING ALL FROM "test"')
    res.sendStatus(500)
  })
});

module.exports = router;