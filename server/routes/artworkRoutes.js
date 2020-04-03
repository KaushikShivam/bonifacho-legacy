const express = require('express');
const artworkController = require('./../controllers/artworkController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.route(
  '/get-my-artworks',
  authController.protect,
  artworkController.getMyArtworks,
  artworkController.getAllArtworks
);

router
  .route('/')
  .get(artworkController.getAllArtworks)
  .post(
    authController.protect,
    authController.restrictTo('artist'),
    artworkController.createArtwork
  );

router
  .route('/:id')
  .get(artworkController.getArtwork)
  .patch(artworkController.updateArtwork)
  .delete(artworkController.deleteArtwork);

module.exports = router;
