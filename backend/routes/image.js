var express = require('express');
var router = express.Router();
var service = require("../services/image");

router.get("/:ID", service.getById);
router.post("/", service.createImage);
router.put("/:ID", service.updateImage);
router.delete("/:ID", service.deleteImage);
router.get("/:ID/comment", service.getComment);

module.exports = router;