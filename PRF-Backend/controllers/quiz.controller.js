var config = require('../config.json');
var express = require('express');
var router = express.Router();
var quizService = require('../services/quiz.service');
 
// routes
router.get('/', getAll);
router.get('/random', getRandom);
router.post('/one', getOne);
 
module.exports = router;

 
function getAll(req, res) {
    quizService.getAll()
        .then(function (questions) {
            res.send(questions);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getRandom(req, res) {
    quizService.getRandomQuestion(req.params.level)
        .then(function (quiz) {
            res.json(quiz);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getOne(req, res) {
    quizService.getOne(req.body.id)
        .then(function (one) {
            res.json(one);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}