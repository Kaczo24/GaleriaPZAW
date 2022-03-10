var express = require('express');
var model = require("../models/replyModel");

exports.getById = (req, res, next) => {
    model.query((out) => {
        res.json(out);
    }, "`ReplyID` = " + req.params.ID)
}

exports.createReply = (req, res, next) => {
    model.create(() => {
        res.json({result: "OK"});
    }, req.body.Author, req.body.CreationDate, req.body.Content, req.body.CommentId)
}

exports.updateReply = (req, res, next) => {
    model.update((out) => {
        res.json(out);
    }, req.body.Author, req.body.CreationDate, req.body.Content, req.body.CommentId, req.params.ID)
}

exports.deleteReply = (req, res, next) => {
    model.delete((out) => {
        res.json(out);
    }, req.params.ID)
}