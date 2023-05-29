const { Country, Activity } = require("../db.js")
const { Op } = require("sequelize")

// Gets: all those countries that match the name
async function getCountriesByName(name) {
  const countries = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`
      }
    },
    include: {
      model: Activity,
      through: {
        attributes: []
      }
    }
  })
  return countries
}

module.exports = { getCountriesByName }