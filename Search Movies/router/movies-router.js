const express = require('express')
const {getMoviesBySearch, getMoviesDetail} = require('../controller/movie-controller')
const router = express.Router()

router.use(express.json())

// GET
router.route('/search').get(getMoviesBySearch)
router.route('/detail').get(getMoviesDetail)
// router.route('/aspAssignment/aspassign/:id').get(tokenAuth(), getAspAssignById)

module.exports = router