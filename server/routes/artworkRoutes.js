const express = require('express');
const artworkController = require('./../controllers/artworkController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.get(
  '/my-artworks',
  authController.protect,
  authController.restrictTo('artist'),
  artworkController.getMyArtworks,
  artworkController.getAllArtworks
);

router.get(
  '/category-artworks',
  artworkController.getArtworkWithCategories
);

router.get(
  '/artwork-week',
  artworkController.getArtworkWeek
);

router
  .route('/')
  .get(artworkController.getAllArtworks)
  .post(
    authController.protect,
    authController.restrictTo('artist'),
    artworkController.createArtwork
  );

router.use(authController.protect, authController.restrictTo('artist'));

router
  .route('/:id')
  .get(artworkController.getArtwork)
  .patch(artworkController.updateArtwork)
  .delete(artworkController.deleteArtwork);

module.exports = router;
