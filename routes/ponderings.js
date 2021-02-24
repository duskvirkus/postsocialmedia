var express = require('express');
const Pondering = require('../model/ponderingSchema');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  let ponderings;
  Pondering.find({}, (err, results) => {
    if (err) {
      console.error(err);
    }
    ponderings = results;
  });
  res.render('ponderings', { ponderings: ponderings });
});

router.get('/new', (req, res, next) => {
  let test = new Pondering({
    pondering: "This is a test."
  });
  test.save(err => {
    if (err) {
      console.error(err);
    }
    console.log('New pondering created!');
  });
});

module.exports = router;
