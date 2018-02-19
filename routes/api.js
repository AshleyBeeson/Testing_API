const express = require ('express');
const router = express.Router();
const Movie = require('../models/movie');

Movie.methods(["get","put","post","delete"]);
Movie.register(router,"/movies");

module.exports = router;
