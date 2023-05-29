import axios from 'axios'
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_COUNTRY_BY_ID = 'GET_COUNTRY_BY_ID'
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME'
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT'
export const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY'
export const FILTER_BY_ACTIVITY_NAME = 'FILTER_BY_ACTIVITY_NAME'
export const SORT = 'SORT'
export const CLEAN_DETAIL = 'CLEAN_DETAIL'
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY'
export const GET_ACTIVITY = 'GET_ACTIVITY'

// Whenever we request information from a server we use fetch or axios, the actions returns another function and the middleware intervenes, that is, it is async.

// Get all countries
export const getAllCountries = () => {
  return async function (dispatch) {
    const countries = await axios.get('http://localhost:3001/countries')
    return dispatch({
      type: GET_COUNTRIES,
      payload: countries.data
    })
  }
}

// Get countries by name  
export function getCountriesByName(name) {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/countries?name=${name}`)
    const countriesByName = response.data
    dispatch({ type: GET_COUNTRIES_BY_NAME, payload: countriesByName })
  }
}

// Get conutry by id  
export function getCountryId(id) {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/countries/${id}`)
    const countryById = response.data;
    dispatch({ type: GET_COUNTRY_BY_ID, payload: countryById })
  }
}

// Get countries by continent
export function filterByContinent(payload) {
  return {
    type: FILTER_BY_CONTINENT,
    payload
  }
}

// Get countries by season activity
export function filterByActivity(payload) {
  return {
    type: FILTER_BY_ACTIVITY,
    payload
  }
}

// Get countries by name activity  
export function filterByActivityName(payload) {
  return {
    type: FILTER_BY_ACTIVITY_NAME,
    payload
  }
}

// Ordering
export function sort(payload) {
  return {
    type: SORT,
    payload
  }
}

// Clear the form
export const cleanDetail = () => {
  return ({ type: CLEAN_DETAIL })
}

// Create an activity
export function createActivity(response) {
  return async function (dispatch) {
    const newActivity = await axios.post('http://localhost:3001/activities', response)
    console.log(newActivity)
    dispatch({ type: CREATE_ACTIVITY, payload: response })
  }
}

// Get all activities
export const getAllActivities = () => {
  return async function (dispatch) {
    const activity = await axios.get('http://localhost:3001/activities')
    return dispatch({
      type: GET_ACTIVITY,
      payload: activity.data
    })
  }
}



