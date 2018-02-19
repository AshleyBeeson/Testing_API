const express = require ('express');
const router = express.Router();
const Movie = require('../models/movie');

// get a list of movies from the db
router.get('/movies', function(req, res, next){
     Movie.find({}).then(function(movies){
        res.send(movies);
    });
});



// add a new movie to the db
router.post('/movies', function(req, res, next){
    Movie.create(req.body).then(function(movies){
        res.send(movies);
    }).catch(next);
});

// update a movie in the db with their ID
router.put('/movies/:id', function(req, res, next){
    Movie.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Movie.findOne({_id: req.params.id}).then(function(movies){
            res.send(movies);
        });
    }).catch(next);
});

// delete a movie from the db with their ID
router.delete('/movies/:id', function(req, res, next){
    Movie.findByIdAndRemove({_id: req.params.id}).then(function(movies){
        res.send(movies);
    }).catch(next);
});

module.exports = router;
