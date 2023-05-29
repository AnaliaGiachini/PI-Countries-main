const { Country, Activity } = require("../db.js")

// Get: the country specified by id
async function getCountryById(id) {
  const country = await Country.findByPk(id.toUpperCase(), {
    include: Activity,
    through: {
      attributes: []
    }
  })
  return country
}

module.exports = { getCountryById }
