import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getCountryId, cleanDetail } from '../../redux/actions'
import { Link } from "react-router-dom"
import style from './Detail.module.css'



// Country detail
const Detail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const detail = useSelector(state => state.countryDetail)

  useEffect(() => {
    dispatch(getCountryId(id))
    return () => dispatch(cleanDetail())
  }, [id, dispatch])

  return (
    <div className={style.container}>
      <div className={style.containerCard}>
        <h1>{detail.name}</h1>
        <img className={style.img} src={detail.image} alt={'imagen not found'} />
        <h3>Continent: {detail.continent}</h3>
        <h3>Capital: {detail.capital}</h3>
        <h3>Subregion: {detail.subregion}</h3>
        <h3>Area: {detail.area}</h3>
        <h3>Population: {detail.population}</h3>
        <h3 className={style.activities}>Activities:</h3>
        <ul className={style.ulactivities}> 
          {detail.activities &&
            detail.activities.map((act) => (
              <li key={act.id}>
                <p>
                  <strong>{act.name}</strong> ({act.season}) | Duration:{' '}
                  {act.duration} - Difficulty: {act.difficulty}
                </p>
              </li>
            ))}
        </ul>
        <Link to='/home'>
          <button className={style.button}>Go back</button>
        </Link>
      </div>
    </div>
  )
}

export default Detail
