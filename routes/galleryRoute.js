const express = require("express");
const Gallery = require("../models/gallery");
const galleryRouter = express.Router();
const multer = require("multer");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
});

galleryRouter
  .route("/upload")
  .post(upload.single("imageUrl"), (req, res, next) => {
    console.log(req.body);
    const newGallery = new Gallery({
      board: req.body.board,
      switches: req.body.switches,
      keycaps: req.body.keycaps,
      imageUrl: req.file.path,
    });

    newGallery
      .save()
      .then((result) => {
        console.log(result);
        res.status(200).json({
          success: true,
          document: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

galleryRouter.route("/:galleryId").get((req, res, next) => {
  const galleryId = req.params.galleryId;
  Gallery.findById(galleryId)
    .then((gallery) => {
      res.send({
        board: gallery.board,
        switches: gallery.switches,
        keycaps: gallery.keycaps,
        imageUrl: gallery.imageUrl,
      });
    })
    .catch((err) => console.log(err));
});

galleryRouter.route("/").get((req, res, next) => {
  Gallery.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = galleryRouter;
