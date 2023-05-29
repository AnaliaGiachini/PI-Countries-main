const { Router } = require('express')
const countriesRoutes = require('./countriesRoutes')
const activitiesRoutes = require('./activitiesRoutes')

// Const: for routes, this defined the routes
const router = Router()

// Direct: the routes
router.use('/countries', countriesRoutes)
router.use('/activities', activitiesRoutes)

module.exports = router
