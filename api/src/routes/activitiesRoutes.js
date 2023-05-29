const { Router } = require('express')
const { createActivityHandler } = require('../handlers/createActivityHandler.js')
const { getAllActivitiesHandler } = require('../handlers/getAllActivitiesHandler.js')
const activityRouter = Router()

// POST: | /activities
activityRouter.post('/', createActivityHandler)
// GET: | /activities
activityRouter.get('/', getAllActivitiesHandler)

module.exports = activityRouter

