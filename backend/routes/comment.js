var express = require('express');
var router = express.Router();
var service = require("../services/comment");

router.post("/", service.createComment);
router.get("/:ID", service.getById);
router.put("/:ID", service.updateComment);
router.get("/:ID/reply", service.getReply);
router.delete("/:ID", service.deleteComment);

module.exports = router;