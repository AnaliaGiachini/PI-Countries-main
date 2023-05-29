const { Router } = require('express')
const { getAllCountriesHandler } = require('../handlers/getAllCountriesHandler.js')
const { getCountryByIdHandler } = require('../handlers/getCountryByIdHandler.js')
const { getCountriesByNameHandler } = require('../handlers/getCountriesByNameHandler.js')

// Const: for the route to countries 
const countryRouter = Router()

// GET: | /countries
countryRouter.get('/', getAllCountriesHandler)

// GET: | /countries/:idPais
countryRouter.get('/:id', getCountryByIdHandler)

// GET: | /countries/name?="..."
countryRouter.get('/', getCountriesByNameHandler)

module.exports = countryRouter