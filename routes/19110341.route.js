const express = require('express')
const router = express.Router()

const controller_19110341 = require('../controllers/19110341.controller')

router.get('/:id', controller_19110341.get)

router.post('/', controller_19110341.post)

module.exports = router