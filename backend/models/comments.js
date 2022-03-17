const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comments', {
    CommentID: {
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
    PictureID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pictures',
        key: 'PictureID'
      }
    }
  }, {
    sequelize,
    tableName: 'comments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CommentID" },
        ]
      },
      {
        name: "PictureID",
        using: "BTREE",
        fields: [
          { name: "PictureID" },
        ]
      },
    ]
  });
};
