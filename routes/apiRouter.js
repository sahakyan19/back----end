const { Router } = require('express')
const router = new Router()
const apiController = require('../controller/apiController')

router.get('/mobiles', apiController.getMobiles)

module.exports = router