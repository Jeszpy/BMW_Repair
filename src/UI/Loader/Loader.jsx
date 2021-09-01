import React from 'react'
import './Loader.css'

const loadText = [
  'Закрываем капот',
  'Протираем стёкла',
  'Что-то делаем',
  'Заводим машину',
]
var keyword = loadText[Math.floor(Math.random() * loadText.length)]

export const Loader = () => {
  return (
    <div class="loading-window">
      <div class="car">
        <div class="strike"></div>
        <div class="strike strike2"></div>
        <div class="strike strike3"></div>
        <div class="strike strike4"></div>
        <div class="strike strike5"></div>
        <div class="car-detail spoiler"></div>
        <div class="car-detail back"></div>
        <div class="car-detail center"></div>
        <div class="car-detail center1"></div>
        <div class="car-detail front"></div>
        <div class="car-detail wheel"></div>
        <div class="car-detail wheel wheel2"></div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',

          alignItems: 'flex-start',
          alignContent: 'flex-start',
          margin: '0 35 0 0',
          alignSelf: 'center',
          left: '85px',
        }}
        class="text"
      >
        <span>{keyword}</span>
        <span class="dots">...</span>
      </div>
    </div>
  )
}
