const { Country, Activity } = require("../db.js")

// Get: all activities
async function getAllActivities() {
  const activities = await Activity.findAll({
    include: {
      model: Country,
      through: {
        attributes: [],
      },
    }
  })
  return activities
}

module.exports = { getAllActivities }