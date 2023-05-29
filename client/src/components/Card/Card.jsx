import React from 'react'
import style from './Card.module.css'
import { Link } from 'react-router-dom'

// Country card
const Card = ({ id, image, name, continent }) => {
  return (
    <div className={style.container}>
      <h2>{name}</h2>
      <Link className={style.link} to={`/detail/${id}`}>
        <img className={style.img} src={image} alt={'imagen not found'} />
      </Link>
      <h4>Continent: {continent}</h4>
    </div>
  )
}

export default Card