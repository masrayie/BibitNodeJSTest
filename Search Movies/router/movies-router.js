const express = require('express')
const {getMoviesBySearch} = require('../controller/movie-controller')
const router = express.Router()

router.use(express.json())

// GET
router.route('/search').get(getMoviesBySearch)
// router.route('/aspAssignment/aspassign/:id').get(tokenAuth(), getAspAssignById)

module.exports = router