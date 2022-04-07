var express = require('express');
const multer = require('multer');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('pzaw', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});
var model = require("../models/init-models")(sequelize);

exports.getPicture = (req, res) => {
    model.pictures.findByPk(req.params.ID).then(succ => {
        res.sendFile(process.env.IMAGES_PATH + "\\" + req.params.ID);
    }).catch(err=>{
        res.status(422).json({"error":err});
    })
}

exports.getById = (req, res, next) => {
    model.pictures.findByPk(req.params.ID).then(succ => {
        res.json(succ);
    }).catch(err=>{
        res.status(422).json({"error":err});
    })
}

exports.createImage = (req, res, next) => {
    let picture = model.pictures.build({PictureID: +((Math.random()+"").substr(10))});
    multer({ 
        storage: multer.diskStorage({ 
            destination: (req, file, cb) => { cb(null, process.env.IMAGES_PATH) },
            filename: (req, file, cb) => { cb(null, picture.PictureID+"") } 
        }) 
    }).single("file")(req, res, (err) => {
        Object.assign(picture, {Name: req.body.Name, CreationDate: req.body.CreationDate, AlbumID: req.body.AlbumId, Resolution: req.body.Resolution, Size: req.body.Size, Extention: req.body.Extension, CameraInfo: req.body.CameraInfo});
        picture.save().then(succ => {
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
    });
}

exports.updateImage = (req, res, next) => {
    model.pictures.update({Name: req.body.Name, CreationDate: req.body.CreationDate, AlbumID: req.body.AlbumId, Resolution: req.body.Resolution, Size: req.body.Size, Extention: req.body.Extension, CameraInfo: req.body.CameraInfo}, { where: { PictureID: req.params.ID } }).then(succ => {
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
    model.comments.findAll({where: { PictureID: req.params.ID }, limit: req.query.size?+req.query.size:undefined, offset: req.query.offset?+req.query.offset:undefined}).then(succ => {
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