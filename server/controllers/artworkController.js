const Artwork = require('./../models/artworkModel');

const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/AppError');
const APIFeatures = require('./../utils/APIFeatures');

exports.getAllArtworks = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Artwork.find(), req.query)
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
});

exports.createArtwork = catchAsync(async (req, res, next) => {
  const artwork = await Artwork.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      artwork
    }
  });
});

exports.getArtwork = catchAsync(async (req, res, next) => {
  const artwork = await Artwork.findById(req.params.id);

  if (!artwork) {
    return next(new AppError('No Artwork found with this ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      artwork
    }
  });
});

exports.updateArtwork = catchAsync(async (req, res, next) => {
  const artwork = await Artwork.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true
  });

  if (!artwork) {
    return next(new AppError('No Artwork found with this ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      artwork
    }
  });
});

exports.deleteArtwork = catchAsync(async (req, res, next) => {
  const artwork = await Artwork.findByIdAndDelete(req.params.id);

  if (!artwork) {
    return next(new AppError('No Artwork found with this ID', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null
  });
});
