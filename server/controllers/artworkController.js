const Artwork = require('./../models/artworkModel');

exports.getAllArtworks = async (req, res, next) => {
  try {
    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    //Execute query
    const artworks = await features.query;

    res.status(200).json({
      status: 'success',
      results: artworks.length,
      data: {
        artworks
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createArtwork = async (req, res, next) => {
  try {
    const artwork = await Artwork.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        artwork
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getArtwork = async (req, res, next) => {
  try {
    const artwork = await Artwork.findById(req.params.id);

    if (!artwork) {
      return res.status(404).json({
        status: 'fail',
        message: 'Artwork with this ID not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: {
        artwork
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateArtwork = async (req, res, next) => {
  try {
    const artwork = await Artwork.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        artwork
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteArtwork = async (req, res, next) => {
  try {
    await Artwork.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};
