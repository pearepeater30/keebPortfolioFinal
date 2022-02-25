const Gallery = require('../models/gallery')

exports.getGallery = (req, res, next) => {
  const result = Gallery.find();
  res.send();
}