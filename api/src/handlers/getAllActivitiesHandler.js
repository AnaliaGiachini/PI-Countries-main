const { getAllActivities } = require("../controllers/getAllActivitiesController.js")

// Get: all activities
async function getAllActivitiesHandler(req, res) {
  try {
    const allactivities = await getAllActivities()
    res.status(200).send(allactivities)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { getAllActivitiesHandler }