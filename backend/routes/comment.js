var express = require('express');
var router = express.Router();
var service = require("../services/comment");

router.post("/");
router.get("/:ID");
router.put("/:ID");
router.delete("/:ID");

module.exports = router;