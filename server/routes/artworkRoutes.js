const express = require('express');
const artworkController = require('./../controllers/artworkController');

const router = express.Router();

router
  .route('/')
  .get(artworkController.getAllArtworks)
  .post(artworkController.createArtwork);

router
  .route('/:id')
  .get(artworkController.getArtwork)
  .patch(artworkController.updateArtwork)
  .delete(artworkController.deleteArtwork);

module.exports = router;
