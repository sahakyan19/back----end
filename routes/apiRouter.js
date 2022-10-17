const { Router } = require('express')
const router = new Router()
const apiController = require('../controller/apiController')

router.get('/all-products', apiController.getProducts)
router.get('/mobiles', apiController.getMobiles)
router.get('/tablets', apiController.getTablets)
router.get('/accessories', apiController.getAccessories)

module.exports = router