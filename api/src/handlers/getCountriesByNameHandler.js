const { getCountriesByName } = require("../controllers/getCountriesByNameController.js")

// Gets: all those countries that match the name
async function getCountriesByNameHandler(req, res) {
  const { name } = req.query
  try {
    if (!name) return res.status(400).json({ error: 'You must enter an Name' })
    const countries = await getCountriesByName(name)
    if (!countries) throw Error(`No countries found with this name: ${name}`)
    res.status(200).send(countries)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { getCountriesByNameHandler }