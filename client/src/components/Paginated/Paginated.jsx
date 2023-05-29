import React from "react"
import style from './Paginated.module.css'

const Paginated = ({ currentPage, paginated, totalPages }) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      paginated(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      paginated(currentPage + 1)
    }
  }

  return (
    <div className={style.container}>
      <button className={style.button} onClick={handlePrev} disabled={currentPage === 1}> Anterior </button>
      <span className={style.span}>  {currentPage}  de  {totalPages}  </span>
      <button className={style.button} onClick={handleNext} disabled={currentPage === totalPages}> Siguiente </button>
    </div>
  )
}

export default Paginated