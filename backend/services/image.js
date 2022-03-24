var express = require('express');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('pzaw', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});
var model = require("../models/init-models")(sequelize);

exports.getById = (req, res, next) => {
    model.pictures.findByPk(req.params.ID).then(succ => {
        res.json(succ);
    }).catch(err=>{
        res.status(422).json({"error":err});
    })
}

exports.createImage = (req, res, next) => {
    model.pictures.create({Name: req.body.Name, CreationDate: req.body.CreationDate, AlbumID: req.body.AlbumId, Resolution: req.body.Resolution, Size: req.body.Size, Extension: req.body.Extension, CameraInfo: req.body.CameraInfo}).then(succ => {
        generateTags(req.body.Tags).then(succ3 => {
            model.tags.bulkCreate(succ3.map(id => {return {TagID: id, PictureID: succ.PictureID}})).then(succ4 => {
                res.json(succ)
            }).catch(err=>{
                res.status(422).json({"error": err});
            })
        }).catch(err=>{
            res.status(422).json({"error": err});
        })
    }).catch(err=>{
        res.status(422).json({"error": err});
    })
}

exports.updateImage = (req, res, next) => {
    model.pictures.update({Name: req.body.Name, CreationDate: req.body.CreationDate, AlbumID: req.body.AlbumId, Resolution: req.body.Resolution, Size: req.body.Size, Extension: req.body.Extension, CameraInfo: req.body.CameraInfo}, { where: { PictureID: req.params.ID } }).then(succ => {
        model.tag_picture.destroy({ where: { PictureID: req.params.ID } }).then(succ2 => {
            generateTags(req.body.Tags).then(succ3 => {
                model.tags.bulkCreate(succ3.map(id => {return {TagID: id, PictureID: req.params.ID}})).then(succ4 => {
                    res.json(succ)
                }).catch(err=>{
                    res.status(422).json({"error": err});
                })
            }).catch(err=>{
                res.status(422).json({"error": err});
            })
        }).catch(err=>{
            res.status(422).json({"error": err});
        })
    }).catch(err=>{
        res.status(422).json({"error": err});
    })
}

exports.deleteImage = (req, res, next) => {
    model.pictures.destroy({ where: { PictureID: req.params.ID } }).then(succ => {
        model.tag_picture.destroy({ where: { PictureID: req.params.ID } }).then(succ2 => {
            res.json(succ2);
        }).catch(err=>{
            res.status(422).json({"error": err});
        })
    }).catch(err=>{
        res.status(422).json({"error": err});
    })
}

exports.getComment = (req, res, next) => {
    model.comments.findAll({where: { PictureID: req.params.ID }, limit: req.query.size, offset: req.query.offset}).then(succ => {
        res.json(succ);
    }).catch(err=>{
        res.status(422).json({"error":err});
    })
}

async function generateTags(tags) {
    let out = [];
    for(let tag of tags){
        out.push((await model.tags.findOrCreate({where: {Name: tag}, defaults: {Name: tag}}))[1].TagID)
    }
    return out;
}