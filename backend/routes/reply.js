var express = require('express');
var router = express.Router();
var service = require("../services/reply");

router.post("/", service.createReply);
router.get("/:ID", service.getById);
router.put("/:ID", service.updateReply);
router.delete("/:ID", service.deleteReply);

module.exports = router;