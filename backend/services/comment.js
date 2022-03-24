var express = require('express');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('pzaw', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});
var model = require("../models/init-models")(sequelize);

exports.getById = (req, res, next) => {
    model.comments.findByPk(req.params.ID).then(succ => {
        res.json(succ);
    }).catch(err=>{
        res.status(422).json({"error":err});
    })
}

exports.createComment = (req, res, next) => {
    model.comments.create({Author: req.body.Author, CreateDate: req.body.CreationDate, Content: req.body.Content, PictureID: req.body.PictureId}).then(succ => {
        res.json(succ);
    }).catch(err=>{
        res.status(422).json({"error": err});
    })
}

exports.updateComment = (req, res, next) => {
    model.comments.update({Author: req.body.Author, CreateDate: req.body.CreationDate, Content: req.body.Content, PictureID: req.body.PictureId}, { where: { CommentID: req.params.ID } }).then(succ => {
        res.json(succ);
    }).catch(err=>{
        res.status(422).json({"error": err});
    })}

exports.deleteComment = (req, res, next) => {
    model.comments.destroy({ where: { CommentID: req.params.ID } }).then(succ => {
        res.json(succ);
    }).catch(err=>{
        res.status(422).json({"error": err});
    })
}