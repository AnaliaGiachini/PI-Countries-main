
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCountriesByName } from '../../redux/actions'
import styles from './SearchBar.module.css'

// Search bar
export default function SearchBar() {
  const dispatch = useDispatch()
  // State local
  const [value, setValue] = useState('')

  function handleChange(e) {
    e.preventDefault()
    // Through the local state 'value' I control the form
    // I set the value with what the input brings me
    setValue(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    // Dispatch the action with the value (what the user writes)
    dispatch(getCountriesByName(value))
    setValue('')
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type='text'
        value={value}
        // Pass the function
        onChange={(e) => handleChange(e)}
        placeholder='Search countries...'
      />
      <button
        className={styles.button}
        // Pass the function
        onClick={(e) => handleSubmit(e)}
        type='submit'
      >
        Search
      </button>
    </div>
  )
}