const { Router } = require('express')
const userCtlr = require('../controllers/user')

const router = Router()

router.post('/login', userCtlr.login)

module.exports = router
