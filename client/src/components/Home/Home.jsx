import React from "react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCountries, filterByContinent, filterByActivity, filterByActivityName, sort } from '../../redux/actions'
import Card from '../Card/Card'
import Paginated from '../Paginated/Paginated'
import style from './Home.module.css'
import NavBar from "../NavBar/NavBar"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

// Center page
const Home = () => {
  
  const dispatch = useDispatch()
  // Bring everything that is in the country state
  const allCountries = useSelector((state) => state.countries)

  // Emulates component life cycles i use it when i want the component to display something
  useEffect(() => {
    dispatch(getAllCountries())
  }, [dispatch])

  const [/*Order*/, setOrder] = useState('')

  // Filter by continent
  // e.target.value allows me to access each of the value's options
  function handleContinentFilter(e) {
    dispatch(filterByContinent(e.target.value))
  }

  // Filter by activity
  function handleActivityFilter(e) {
    dispatch(filterByActivity(e.target.value))
  }

  // Filter by name
  function handleActivityFilterByName(e) {
    dispatch(filterByActivityName(e.target.value))
  }

  //---PAGINATED---//
  // Current page
  const [currentPage, setCurrenPage] = useState(1)
  // Countries per page
  const [countriesPerPage, /*setCountriesPerPage*/] = useState(8)
  // Index of last 1*10
  const indexOfLastCountry = currentPage * countriesPerPage
  // Index of the first 10-10
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
  // Countries of the current page
  const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)

  const paginated = (pageNumber) => {
    setCurrenPage(pageNumber)
  }
  //---*---//

  // Sort by name or town
  function handleSort(e) {
    e.preventDefault()
    dispatch(sort(e.target.value))
    setCurrenPage(1)
    // I have to have a global state so that I can also set it
    setOrder(e.target.value)
  }

  function handleClick(e) {
    e.preventDefault()
    dispatch(getAllCountries())
  }

  return (
    <div className={style.container}>

      <NavBar
        sort={handleSort}
        contFilter={handleContinentFilter}
        actFilter={handleActivityFilter}
        actNameFilter={handleActivityFilterByName}
      />


      <div className={style.btnContainer}>
        <Button className={style.reload} variant="outline-light" onClick={(e) => handleClick(e)}>Reload Countries</Button>{' '}
        <button className={style.btn}>
          <Link className={style.link} to='/form'>
            New Activity
          </Link>
        </button>
      </div>

      <div className={style.containerCards}>
        {currentCountries.map((elem) => {
          return (
            <div key={elem.id}>
              <Card
                id={elem.id}
                name={elem.name}
                image={elem.image}
                continent={elem.continent}
              />
            </div>
          )
        })
        }
      </div>

      <Paginated
          currentPage={currentPage}
          paginated={paginated}
          totalPages={Math.ceil(allCountries.length / countriesPerPage)}
        />
    </div>
  )
}

export default Home
