const express = require('express')
const {getAllAPILogs} = require('../controller/apilog-controller')
const router = express.Router()

router.use(express.json())

// GET
router.route('/apilogs').get(getAllAPILogs)
// router.route('/aspAssignment/aspassign/:id').get(tokenAuth(), getAspAssignById)

module.exports = router