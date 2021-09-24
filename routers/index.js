const express = require("express");
const router = express.Router();

const musicController = require("../controller/musicController");

router.get("/", musicController.home);

router.get("/artist-search", musicController.search);

router.get("/albums/:artistId", musicController.album);

router.get("/:artistId/songs", musicController.songs);

module.exports = router;
