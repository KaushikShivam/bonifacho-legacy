const mongoose = require('mongoose');
const slugify = require('slugify');

const artworkSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'An artwork must have a name'],
      minlength: [10, "Artwork's name must be atleast 10 characters long"],
      trim: true,
      unique: true,
    },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'An Artwork must always have a artist'],
    },
    edition: {
      type: String,
      required: [true, 'An Artwork must have an edition'],
      enum: {
        values: ['original', 'limited'],
        message: 'Edition can either be Limited or Original',
      },
      lowercase: true,
    },
    price: {
      type: Number,
      required: [true, 'An Artwork must have a price'],
    },
    category: {
      type: String,
      required: [true, 'An Artwork must have a category'],
      trim: true,
      lowercase: true,
    },
    image: {
      type: String,
      required: [true, 'An Artwork must have an image'],
    },
    slug: String,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

artworkSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

artworkSchema.pre(/^find/, function (next) {
  this.populate({ path: 'artist', select: 'name' });
  next();
});

const Artwork = mongoose.model('Artwork', artworkSchema);

module.exports = Artwork;
