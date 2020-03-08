const Artwork = require('./../models/artworkModel');

exports.getAllArtworks = async (req, res, next) => {
  try {
    const queryObj = { ...req.query };
    // 1. Filtering
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach(el => delete queryObj[el]);

    console.log(req.query);
    // 2. Advanced Filtering
    // gt,gte,lt,lte
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

    let query = Artwork.find(JSON.parse(queryStr));

    // 3. Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    // 4. field limiting
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v');
    }

    // 5. Pagination
    const page = req.query.page * 1 || 1; // Default is page 1 if nothing is provided
    const limit = req.query.limit * 1 || 100; // Default is 100

    const skip = (page - 1) * limit;

    query = query.skip(skip).limit(limit);

    //Execute query
    const artworks = await query;

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
