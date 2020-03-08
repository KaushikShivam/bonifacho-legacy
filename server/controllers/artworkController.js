const Artwork = require('./../models/artworkModel');

exports.getAllArtworks = async (req, res, next) => {
  try {
    const artworks = await Artwork.find();

    res.status(200).json({
      status: 'success',
      results: artworks.length,
      data: {
        artworks
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};
