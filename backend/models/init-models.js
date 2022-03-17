var DataTypes = require("sequelize").DataTypes;
var _albums = require("./albums");
var _comments = require("./comments");
var _pictures = require("./pictures");
var _replies = require("./replies");
var _tag_picture = require("./tag-picture");
var _tags = require("./tags");

function initModels(sequelize) {
  var albums = _albums(sequelize, DataTypes);
  var comments = _comments(sequelize, DataTypes);
  var pictures = _pictures(sequelize, DataTypes);
  var replies = _replies(sequelize, DataTypes);
  var tag_picture = _tag_picture(sequelize, DataTypes);
  var tags = _tags(sequelize, DataTypes);

  pictures.belongsTo(albums, { as: "Album", foreignKey: "AlbumID"});
  albums.hasMany(pictures, { as: "pictures", foreignKey: "AlbumID"});
  replies.belongsTo(comments, { as: "Comment", foreignKey: "CommentID"});
  comments.hasMany(replies, { as: "replies", foreignKey: "CommentID"});
  comments.belongsTo(pictures, { as: "Picture", foreignKey: "PictureID"});
  pictures.hasMany(comments, { as: "comments", foreignKey: "PictureID"});
  tag_picture.belongsTo(pictures, { as: "Picture", foreignKey: "PictureID"});
  pictures.hasMany(tag_picture, { as: "tag-pictures", foreignKey: "PictureID"});
  tag_picture.belongsTo(tags, { as: "Tag", foreignKey: "TagID"});
  tags.hasMany(tag_picture, { as: "tag-pictures", foreignKey: "TagID"});

  return {
    albums,
    comments,
    pictures,
    replies,
    tag_picture,
    tags,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
