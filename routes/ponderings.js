var express = require('express');
const Pondering = require('../model/ponderingSchema');
var router = express.Router();

router.get('/', (req, res, next) => {
  Pondering.find({}, (err, results) => {
    if (err) {
      console.error(err);
    }
    results = results.reverse();
    res.render('ponderings', { ponderings: results });
  });
});

router.get('/new', (req, res, next) => {
  const password = req.query.password;
  const pondering = req.query.pondering;
  if (password && pondering) {
    if (password == process.env.PASSWORD) {
      let test = new Pondering({
        pondering: pondering,
      });
      test.save(err => {
        if (err) {
          console.error(err);
          res.status(500).send({error: "the database isn't working right maybe you should check that."})
        }
        res.status(200).send({created: true});
      });
    } else {
      res.status(401).send({error: "Is this me or are you trying to hack my website? If it's not me maybe spend your time on hacking somewhere else."});
    }
  } else {
    res.status(400).send({error: "Invalid request."});
  }
});

module.exports = router;
