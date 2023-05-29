import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllCountries, createActivity, getAllActivities } from '../../redux/actions'
import style from "./Form.module.css"

// Form to create an activity
const Form = () => {
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.allCountries)

  const activities = useSelector((state) => state.countryActiviti)


  const [details, setDetails] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    country: [],
  })

  useEffect(() => {
    dispatch(getAllCountries())
  }, [dispatch])

  // It is modifying and filling the detail
  function handleChange(e) {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    })
  }

  function handleSelect(e) {
    setDetails({
      ...details,
      country: [...details.country, e.target.value],
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(createActivity(details))
    setDetails({
      name: '',
      difficulty: '',
      duration: '',
      season: '',
      country: [],
    })
  }

  useEffect(() => {
    dispatch(getAllActivities())
  }, [dispatch])

  return (
    <div className={style.container}>
      
      <h1 className={style.title}>Touristic Activity</h1>
      
      <div className={style.card}>
        <form onSubmit={(e) => handleSubmit(e)} autocomplete="off">
          
          <div className={style.formSection}>
            <label className={style.label} htmlFor='name'>Name: </label>
            <input value={details.name}
              type='text'
              id='name'
              name='name'
              className={style.input}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>

          <div className={style.formSection}>
            <label className={style.label} htmlFor='duration'>Duration: </label>
            <input value={details.duration}
              type='text'
              id='duration'
              name='duration'
              className={style.input}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={style.formSection}>
            <label className={style.label} htmlFor='difficulty'>Difficulty: </label>
            <select value={details.difficulty}
              id='difficulty'
              name='difficulty'
              className={style.input}
              onChange={(e) => handleChange(e)}
            >
              <option value=''>Difficulty...</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>

          <div className={style.formSection}>
            <label className={style.label} htmlFor='season'>Season: </label>
            <select value={details.season}
              className={style.input}
              id='season'
              name='season'
              onChange={(e) => handleChange(e)}
            >
              <option value=''>Season...</option>
              <option value='Spring'>Spring</option>
              <option value='Summer'>Summer</option>
              <option value='Fall'>Fall</option>
              <option value='Winter'>Winter</option>
            </select>
          </div>

          <div className={style.formSection}>
            <label className={style.label} htmlFor='season'>Country: </label>
            <select
              className={style.input}
              name='countries'
              onChange={(e) => handleSelect(e)}
              required
            >
              <option value=''>Countries...</option>
              {countries.map((c) => ( 
                
                //lo traigo por id y renderizo el name
                <option key={c.name} value={c.name}>{c.name} </option>
              ))}
            </select>
          </div>
          <div className={style.countries}>
            <ul>
              <li>{details.country.map((c) => ` ${c} | `)}</li>
            </ul>
          </div>
          <Link to='/home'>
            <button className={style.button}>Go back</button>
          </Link>
          <button className={style.buttonA} type='submit'>
            Add Activity
          </button>
        </form>
      </div>
      <div className={style.listA}>
        <ul>
          {activities.map((a, index)=> <li key={index}> {a.name}</li>) }
        </ul>
      </div>
    </div>
  )
}

export default Form



