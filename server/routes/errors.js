var express = require('express');
var router = express.Router();

/* GET all pieces */
router.route('/500')
    .get(function(req, res) {
        res.status(500).send('Piece Tracker server error.');
    });

router.route('/401')
    .get(function(req, res) {
        res.status(401).send('Piece Tracker unauthorized.');
    });

module.exports = router;