const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pictures', {
    PictureID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    CreationDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    AlbumID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'albums',
        key: 'AlbumID'
      }
    },
    Resolution: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    Size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Extention: {
      type: DataTypes.STRING(16),
      allowNull: false
    },
    CameraInfo: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pictures',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PictureID" },
        ]
      },
      {
        name: "AlbumID",
        using: "BTREE",
        fields: [
          { name: "AlbumID" },
        ]
      },
    ]
  });
};
