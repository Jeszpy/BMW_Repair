import React from 'react'
import classes from './Header.module.css'

export const Header = () => {
  return (
    <nav className={classes.header}>
      <img className={classes.logo} src="/img/logo.png" alt="logo"></img>
      {/* <p className={classes.text}>Text</p> */}
      <ul className={classes.list}>
        <li>
          <a className={classes.link} href="#">
            Главная
          </a>
        </li>
        <li>
          <a className={classes.link} href="#">
            Виды работ
          </a>
        </li>
        <li>
          <a className={classes.link} href="#">
            О нас
          </a>
        </li>
        <li>
          <a className={classes.link} href="#">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  )
}
