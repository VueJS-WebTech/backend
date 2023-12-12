const User = require('./models/user');
const Article = require('./models/article');
const Comment = require('./models/comment');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.get('/articles', (req, res) => {
    Article.findAll({
        include: [
            {
                model: User,
                attributes: ['id', 'name', 'username']
            }
        ]
    }).then(article => {
        res.send(article)
    })
})
app.get('/article', (req, res) => {
    const {id} = req.query;
    Article.findAll({
        where: {
            id
        },
        include: [
            {
                model: User,
                attributes: ['id', 'name']
            },
            {
                model: Comment,
                attributes: ['id', 'content'],
                include: {
                    model: User,
                    attributes: ['id', 'name', 'username']
                }
            }
        ]
    }).then(article => {
        res.send(article[0])
    })
})
app.get('/user', (req, res) => {
    const {id} = req.query;
    User.findAll({
        where: {
            id
        }
    }).then(user => {
        Article.findAll({
            where: {
                UserId: user[0].id
            }
        }).then(articles => {
            res.send({
                user: user[0],
                articles
            })
        })
    })
})

app.listen(3000)