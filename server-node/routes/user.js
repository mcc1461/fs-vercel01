"use strict"

const router = require('express').Router()

// routes/user:

const user = require('../controllers/user')

// URL: /users

router.route('/getUsers')
    .get(user.list)
    .get(user.read)

/* ------------------------------------------------------- */
module.exports = router