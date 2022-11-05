var express = require('express');
var router = express.Router();

/* GET monitor listing. */
router.get('/isalive', function(req, res, next) {
  res.send('REST App is up and running...!');
});

module.exports = router;
