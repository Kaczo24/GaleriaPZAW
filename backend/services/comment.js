var express = require('express');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('pzaw', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});
var model = require("../models/init-models")(sequelize);

exports.getById = (req, res, next) => {
    model.query((out) => {
        res.json(out);
    }, "`CommentsID` = " + req.params.ID)
}

exports.createComment = (req, res, next) => {
    model.create(() => {
        res.json({result: "OK"});
    }, req.body.Author, req.body.CreationDate, req.body.Content, req.body.PictureId)
}

exports.updateComment = (req, res, next) => {
    model.update((out) => {
        res.json(out);
    }, req.body.Author, req.body.CreationDate, req.body.Content, req.body.PictureId, req.params.ID)
}

exports.deleteComment = (req, res, next) => {
    model.delete((out) => {
        res.json(out);
    }, req.params.ID)
}