import React from 'react'
import classes from './Main.module.css'

export const Main = () => {
  return (
    <div className={classes.background}>
      <img className={classes.mainImage} src="/img/bmw-1.png" alt="mainCar" />
      <div className={classes.text}>
        <h1>Диангостика и ремонт BMW.</h1>
        <p style={{ fontSize: '25px' }}>Какой-то ещё текст.</p>
      </div>
    </div>
  )
}
