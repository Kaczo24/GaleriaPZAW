const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('replies', {
    ReplyID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Author: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    Content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    CreateDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    CommentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comments',
        key: 'CommentID'
      }
    }
  }, {
    sequelize,
    tableName: 'replies',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ReplyID" },
        ]
      },
      {
        name: "CommentID",
        using: "BTREE",
        fields: [
          { name: "CommentID" },
        ]
      },
    ]
  });
};
