const mongoose = require('mongoose');

const artworkSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'An artwork must have a name'],
      minlength: [10, "Artwork's name must be atleast 10 characters long"],
      trim: true,
      unique: true
    },
    edition: {
      type: String,
      required: [true, 'An Artwork must have an edition'],
      enum: {
        values: ['original', 'limited'],
        message: 'Edition can either be Limited or Original'
      }
    },
    price: {
      type: Number,
      required: [true, 'An Artwork must have a price']
    },
    category: {
      type: String,
      required: [true, 'An Artwork must have a category'],
      trim: true
    },
    image: {
      type: String,
      required: [true, 'An Artwork must have an image']
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

const Artwork = mongoose.model('Artwork', artworkSchema);

module.exports = Artwork;
