const express = require('express');
const artworkController = require('./../controllers/artworkController');

const router = express.Router();

router.route('/').get(artworkController.getAllArtworks);

module.exports = router;
