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
    }, "`PictureId` = " + req.params.ID)
}

exports.createImage = (req, res, next) => {
    model.create(() => {
        res.json({result: "OK"});
    },  req.body.Name, req.body.CreationDate, req.body.AlbumId, req.body.Resolution, req.body.Size, req.body.Extension, req.body.CameraInfo)
}

exports.updateImage = (req, res, next) => {
    model.update((out) => {
        res.json(out);
    },  req.body.Name, req.body.CreationDate, req.body.AlbumId, req.body.Resolution, req.body.Size, req.body.Extension, req.body.CameraInfo)
}

exports.deleteImage = (req, res, next) => {
    model.delete((out) => {
        res.json(out);
    }, req.params.ID)
}

exports.getComment = (req, res, next) => {
    commentModel.query((out) => {
        res.json(out);
    }, "`PictureId` = " + req.params.ID, req.query.size, req.query.page)
}