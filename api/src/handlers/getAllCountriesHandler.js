const { getAllCountries } = require("../controllers/getAllCountriesController.js")

// Get: all countries
async function getAllCountriesHandler(req, res, next) {
  if (req.query.name) return next()
  try {
    const allCountries = await getAllCountries()
    res.status(200).send(allCountries)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { getAllCountriesHandler }
