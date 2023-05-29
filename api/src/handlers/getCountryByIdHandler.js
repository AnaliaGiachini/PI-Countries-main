const { getCountryById } = require("../controllers/getCountryByIdController.js")

// Get: the country specified by id
async function getCountryByIdHandler(req, res) {
  const { id } = req.params
  try {
    if (!id) return res.status(400).json({ error: 'You must enter an ID' })
    else {
      const country = await getCountryById(id)
      if (!country) throw Error(`No country found with this id: ${id}`)
      res.status(200).send(country)
    }
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { getCountryByIdHandler }