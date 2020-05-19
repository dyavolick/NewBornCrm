const express = require('express')
const controller = require('../controllers/position')
const passport = require('passport')
const router = express.Router()

router.get('/:categoryId',
    passport.authenticate('jwt', { session: false}),
    controller.getByCategoryId)
router.post('/',controller.create)
router.patch('/:id',controller.update)
router.post('/:id',controller.remove)

module.exports = router