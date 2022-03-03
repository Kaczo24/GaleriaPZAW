var express = require('express');
var model = require("../models/albumModel");

exports.getAll = (req, res, next) => {
    model.query((out) => {
        res.json(out);
    }, req.query.size, req.query.page)
}

exports.getById = (req, res, next) => {
    model.query((out) => {
        res.json(out);
    }, "`AlbumID` = " + req.params.ID)
}

exports.createAlbum = (req, res, next) => {
    model.create(() => {
        res.json({result: "OK"});
    }, req.body.Name, req.body.CreationDate)
}

exports.updateAlbum = (req, res, next) => {
    model.update((out) => {
        res.json(out);
    }, req.body.Name, req.body.CreationDate, req.params.ID)
}

exports.deleteAlbum = (req, res, next) => {
    model.delete((out) => {
        res.json(out);
    }, req.params.ID)
}