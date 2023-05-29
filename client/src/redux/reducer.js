import {
  GET_COUNTRIES, GET_COUNTRY_BY_ID, GET_COUNTRIES_BY_NAME,
  FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY,
  FILTER_BY_ACTIVITY_NAME, SORT, CLEAN_DETAIL, CREATE_ACTIVITY,
  GET_ACTIVITY
} from './actions'

const initialState = {
  countries: [], // This array is modified according to the filters
  allCountries: [],
  countryDetail: {},
  countryActiviti: []
}

// Payload: indicates the value to change
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Get all countries
    // I enter all the countries in the two arrays
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload
      }

    // Get countries by name  
    case GET_COUNTRIES_BY_NAME:
      return {
        ...state,
        countries: action.payload
      }

    // Get conutry by id      
    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        countryDetail: action.payload
      }

    // Get countries by continent
    // when filtering it always filters everyone but modifies the countries
    case FILTER_BY_CONTINENT:
      const filteredByCntnt =
        action.payload === 'All'
          ? state.allCountries
          : state.allCountries.filter((c) => c.continent === action.payload)
      return {
        ...state,
        countries: filteredByCntnt
      }

    // Get countries by season activity
    case FILTER_BY_ACTIVITY:
      const filtered =
        action.payload === 'All'
          ? state.allCountries
          : state.allCountries.filter(
            (c) => c.activities &&
              c.activities.filter((act) => act.season === action.payload).length
          )
      return {
        ...state,
        countries: filtered,
      }

    // Get countries by name activity  
    case FILTER_BY_ACTIVITY_NAME:
      const filteredByName =
        action.payload === 'All'
          ? state.allCountries
          : state.allCountries.filter(
            (c) => c.activities &&
              c.activities.filter((act) => act.name === action.payload).length
          )
      return {
        ...state,
        countries: filteredByName,
      }

    // Ordering // Sort order
    case SORT:
      var sorted
      if (action.payload.length === 2) {
        // Orderin by name 
        sorted =
          action.payload === 'AZ'
            ? state.countries.sort((a, b) => {
              if (a.name > b.name) return 1
              if (a.name < b.name) return -1
              return 0
            })
            : state.countries.sort((a, b) => {
              if (a.name > b.name) return -1
              if (a.name < b.name) return 1
              return 0
            })
      } else {
        // Orderin by population 
        sorted =
          action.payload === 'populationAsc'
            ? state.countries.sort((a, b) => a.population - b.population)
            : state.countries.sort((a, b) => b.population - a.population)
      }
      return {
        ...state,
        countries: sorted,
      }

    // Clear the form
    case CLEAN_DETAIL:
      return {
        ...state,
        countryDetail: {}
      }

    // Create an activity
    case CREATE_ACTIVITY:
      return {
        ...state,
        countryActiviti: [...state.countryActiviti, action.payload]
      }

    // Get all activities
    case GET_ACTIVITY:
      return {
        ...state,
        countryActiviti: action.payload,
      }

    default:
      return ({ ...state })
  }
}

export default reducer