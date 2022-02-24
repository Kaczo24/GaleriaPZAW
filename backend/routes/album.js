var express = require('express');
var router = express.Router();
var service = require("../services/album");

router.get("/", service.getAll);
router.get("/:ID", service.getById);

router.get("/:ID/image", service.getAll);
router.post("/", service.getAll);
router.put("/:ID", service.getAll);
router.delete("/:ID", service.getAll);


module.exports = router;