import style from './Landing.module.css'
import { Link } from 'react-router-dom'


// Main page
const Landing = () => {
  return (  
    <div className={style.container} >
      <div>
        <Link to={'/home'}>
          <button className={style.button} > GO ! </button>
        </Link>
        <p className={style.text}>In this application you can view information from all countries...</p>
        <p className={style.footer} >By Analia Giachini</p>
      </div>
    </div>
  )
}

export default Landing
