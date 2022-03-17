var express = require('express');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('pzaw', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});
var model = require("../models/init-models")(sequelize);

exports.getAll = (req, res, next) => {
    model.albums.findAll({limit: req.query.size, offset: req.query.offset}).then(succ => {
        res.json(succ);
    }).catch(err=>{
        res.status(422).json({"error":err});
    })
}

exports.getById = (req, res, next) => {
    model.albums.findOne({ where: { AlbumID: req.params.ID } }).then(succ => {
        res.json(succ);
    }).catch(err=>{
        res.status(422).json({"error":err});
    })
}

exports.getImages = (req, res, next) => {
    model.pictures.findAll({ where: {AlbumId: req.params.ID}, limit: req.query.size, offset: req.query.offset}).then(succ => {
        res.json(succ);
    }).catch(err=>{
        res.status(422).json({"error":err});
    })
}

exports.createAlbum = (req, res, next) => {
    model.albums.create({Name: req.body.Name, CreationDate: req.body.CreationDate}).then(succ => {
        res.json(succ);
    }).catch(err=>{
        res.status(422).json({"error": err});
    })
}

exports.updateAlbum = (req, res, next) => {
    model.albums.update({Name: req.body.Name, CreationDate: req.body.CreationDate}, { where: { AlbumID: req.params.ID } }).then(succ => {
        res.json(succ);
    }).catch(err=>{
        res.status(422).json({"error": err});
    })
}

exports.deleteAlbum = (req, res, next) => {
    model.albums.destroy({ where: { AlbumID: req.params.ID } }).then(succ => {
        res.json(succ);
    }).catch(err=>{
        res.status(422).json({"error": err});
    })
}