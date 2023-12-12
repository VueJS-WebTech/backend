const { DataTypes } = require('sequelize');
const sequelize = require('./');
const Article = require('./article');
const Comment = require('./comment');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

User.hasMany(Article, { as: 'articles' });
Article.belongsTo(User);
Comment.belongsTo(User);

module.exports = User;