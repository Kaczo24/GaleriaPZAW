var express = require('express');
var router = express.Router();
var service = require("../services/album");

router.get("/", service.getAll);
router.get("/:ID", service.getById);

router.get("/:ID/image", service.getAll);
router.post("/", service.createAlbum);
router.put("/:ID", service.updateAlbum);
router.delete("/:ID", service.deleteAlbum);


module.exports = router;