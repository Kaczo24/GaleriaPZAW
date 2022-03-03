var express = require('express');
var router = express.Router();
var service = require("../services/comment");

router.post("/", service.createComment);
router.get("/:ID", service.getById);
router.put("/:ID", service.updateComment);
router.delete("/:ID", service.deleteComment);

module.exports = router;