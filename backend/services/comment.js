var express = require('express');
var model = require("../models/commentModel");

exports.getById = (req, res, next) => {
    model.query((out) => {
        res.json(out);
    }, "`CommentsID` = " + req.params.ID)
}

exports.createComment = (req, res, next) => {
    model.create(() => {
        res.json({result: "OK"});
    }, req.body.Author, req.body.CreateDate, req.body.Content, req.body.PictureId)
}

exports.updateComment = (req, res, next) => {
    model.update((out) => {
        res.json(out);
    }, req.body.content, req.params.ID)
}

exports.deleteComment = (req, res, next) => {
    model.delete((out) => {
        res.json(out);
    }, req.params.ID)
}