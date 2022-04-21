var express = require('express');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('pzaw', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});
var model = require("../models/init-models")(sequelize);

exports.getById = (req, res, next) => {
    model.replies.findByPk(req.params.ID).then(succ => {
        res.json(succ);
    }).catch(err=>{
        res.status(422).json({"error":err});
    })
}

exports.createReply = (req, res, next) => {
    model.replies.create({Author: req.body.Author, CreateDate: new Date().toISOString(), Content: req.body.Content, CommentID: req.body.CommentID}).then(succ => {
        res.json(succ);
    }).catch(err=>{
        res.status(422).json({"error": err});
    })
}

exports.updateReply = (req, res, next) => {
    model.replies.update({Author: req.body.Author, Content: req.body.Content, CommentID: req.body.CommentID}, { where: { ReplyID: req.params.ID } }).then(succ => {
        res.json(succ);
    }).catch(err=>{
        res.status(422).json({"error": err});
    })}

exports.deleteReply = (req, res, next) => {
    model.replies.destroy({ where: { ReplyID: req.params.ID } }).then(succ => {
        res.json(succ);
    }).catch(err=>{
        res.status(422).json({"error": err});
    })
}