import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCountries, getAllActivities } from '../../redux/actions'
import SearchBar from '../SearchBar/SearchBar'
import styles from './NavBar.module.css'

// Navigation bar
export default function NavBar({ sort, contFilter, actFilter, actNameFilter }) {
  const dispatch = useDispatch()
  const activities = useSelector((state) => state.countryActiviti)

  function handleClick(e) {
    e.preventDefault()
    dispatch(getAllCountries())
  }

  useEffect(() => {
    dispatch(getAllCountries())
  }, [dispatch])

  useEffect(() => {
    dispatch(getAllActivities())
  }, [dispatch])


  return (
    <div className={styles.NavBar}>
      <div className={styles.container}>
        <h1 className={styles.earth} onClick={(e) => handleClick(e)}>
          
        </h1>

        <SearchBar />
        <div className={styles.filterContainer}>
          {/* filtro por continente */}
          <select className={styles.filter} onChange={(e) => contFilter(e)}>
            <option value='All'>Filter by region...</option>
            <option value='Asia'>Asia</option>
            <option value='Africa'>Africa</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceanía</option>
            <option value='Antarctica'>Antarctica</option>
            <option value='North America'>North America</option>
            <option value='South America'>South America</option>
          </select>

          {/* filtro por estacion */}
          <select className={styles.filter} onChange={(e) => actFilter(e)}>
            <option value='All'>Filter activities by season...</option>
            <option value='Summer'>Summer</option>
            <option value='Fall'>Fall</option>
            <option value='Winter'>Winter</option>
            <option value='Spring'>Spring</option>
          </select>

          {/* filtro por actividad */}
          <select className={styles.filter} onChange={(e) => actNameFilter(e)}>
            <option value='All'>Filter by activity...</option>
            {activities.map((a) => (
              //lo traigo y renderizo el name
              <option key={a.name} value={a.name}>{a.name}</option>
            ))}
          </select>

          {/* orden por nombre o poblacion */}
          <select className={styles.filter} onChange={(e) => sort(e)}>
            <option value='AZ'>Sort by...</option>
            <option value='AZ'>Name (A-Z)</option>
            <option value='ZA'>Name (Z-A)</option>
            <option value='populationAsc'>Population (asc)</option>
            <option value='populationDesc'>Population (desc)</option>
          </select>
        </div>
      </div>
    </div>
  )
}
