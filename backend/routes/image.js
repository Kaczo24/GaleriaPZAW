var express = require('express');
var router = express.Router();
var service = require("../services/image");

router.get("/:ID");
router.post("/:ID");
router.put("/:ID");
router.delete("/:ID");
router.get("/:ID/comment");

module.exports = router;