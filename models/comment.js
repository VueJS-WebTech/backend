const { DataTypes } = require('sequelize');
const sequelize = require('./');

const Comment = sequelize.define('Comment', {
    content: {
        type: DataTypes.TEXT
    }
});

module.exports = Comment;