const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PostComment extends Model {}

PostComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    blogpost_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'blogpost',
        key: 'id',
      },
    },
    comment_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'comment',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'postComment',
  }
);

module.exports = PostComment;
  