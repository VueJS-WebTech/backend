const { DataTypes } = require('sequelize');
const sequelize = require('./');
const User = require('./user')
const Comment = require('./comment')

const Article = sequelize.define('Article', {
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    icon: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    banner: {
        type: DataTypes.TEXT,
        allowNull: true
    }
});

Article.hasMany(Comment);

module.exports = Article;