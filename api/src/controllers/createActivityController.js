const { Country, Activity } = require("../db.js")

// Create: tourist activity
const createActivity = async (name, difficulty, duration, season, country) => {
  const countries = await Country.findAll({ where: { name: country } })
  // Create: an activity in said model
  const activity = await Activity.create({
    name, difficulty,
    duration, season
  })

  // Add the country to activity
  await activity.addCountry(countries)
  return activity
}

module.exports = { createActivity }
