const axios = require("axios")
const { Country } = require("../db.js")

// Gets: the countries from the api and inserts them into the DB
const loadCountriesToDB = async () => {
  try {
    await axios.get("https://restcountries.com/v3/all")
      .then(response => {
        const countries = response.data
        countries.forEach(countryData => {
          const capital = Array.isArray(countryData.capital) ? countryData.capital[0] : countryData.capital
          const country = Country.build({
            id: countryData.cca3,
            name: countryData.name.common,
            image: countryData.flags[1],
            continent: countryData.continents[0],
            capital: typeof capital === 'string' ? capital : '',
            population: countryData.population,
            area: countryData.area ? countryData.area : null,
            subregion: countryData.subregion,
          })
          country.save()
        })
      })
  } catch (error) {
    console.error(error)
  }
}

module.exports = { loadCountriesToDB }