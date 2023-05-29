const { createActivity } = require("../controllers/createActivityController.js")
const { Activity } = require("../db.js")

// Create: tourist activity
async function createActivityHandler(req, res) {
  const { name, difficulty, duration, season, country } = req.body
  try {
    if (!name || !difficulty || !duration || !season || !country) {
      return res.status(400).send(`You must complete all fields!`)
    } else if (await Activity.findOne({ where: { name } })) {
      throw new Error('alredy exists, type another activity name')
    }
    else {
      await createActivity(name, difficulty, duration, season, country)
      res.status(200).send(`Activity ${name} created successfully`)
    }
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { createActivityHandler } 