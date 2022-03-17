const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tag-picture', {
    TagID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tags',
        key: 'TagID'
      }
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
    tableName: 'tag-picture',
    timestamps: false,
    indexes: [
      {
        name: "PictureID",
        using: "BTREE",
        fields: [
          { name: "PictureID" },
        ]
      },
      {
        name: "TagID",
        using: "BTREE",
        fields: [
          { name: "TagID" },
        ]
      },
    ]
  });
};
