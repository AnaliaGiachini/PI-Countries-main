const { Country, Activity } = require("../db.js")

// Get: all countries
async function getAllCountries() {
  const countries = await Country.findAll({
    include: {
      model: Activity,
      through: {
        attributes: []
      }
    }
  })
  return countries
}

module.exports = { getAllCountries }