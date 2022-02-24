var express = require('express');
var model = require("../models/albumModel");

exports.getAll = (req, res, next) => {
    model.query((out) => {
        res.json(out);
    })
}

exports.getById = (req, res, next) => {
    model.query((out) => {
        res.json(out);
    }, "`AlbumID` = " + req.params.ID)
}

exports.getAll = (req, res, next) => {
    model.query((out) => {
        res.json(out);
    })
}

exports.getAll = (req, res, next) => {
    model.query((out) => {
        res.json(out);
    })
}

exports.getAll = (req, res, next) => {
    model.query((out) => {
        res.json(out);
    })
}