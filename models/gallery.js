const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gallerySchema = new Schema({
  board: {
    type: String,
    required: true,
  },
  switches: {
    type: String,
    required: true,
  },
  keycaps: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Gallery", gallerySchema);
