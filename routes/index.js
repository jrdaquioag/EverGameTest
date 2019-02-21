const path = require("path");
const express = require('express');
const router = express.Router();

router.use('/api', require('./api'));
router.use('/auth', require('./auth'));

router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

module.exports = router;