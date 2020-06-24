import React from 'react'
import _ from 'lodash'

const SingleTile = ({weather, duration}) => {
  const cardDate = new Date(weather.dt * 1000).toString()
  const formattedCardDate = duration === 'daily' ? cardDate.slice(0,10) : cardDate.slice(0,10).concat(cardDate.slice(15,21))

  const temps = weather.temp.day ? {'Max:': weather.temp.max, 'Min:': weather.temp.min} : {'Temp:': weather.temp, 'Feels like:': weather.feels_like}
  const formattedTemps = _.zip(Object.keys(temps), Object.values(temps)).map(ea => ea.join(' ')).join(' / ')

  const sunrise = new Date(weather.sunrise * 1000).toString().slice(15,21)
  const sunset = new Date(weather.sunset * 1000).toString().slice(15,21)

  return (
    <div className='cell small-3 text-center'>
      <div className='card'>
        <div className='card-section'>
          <h4>{formattedCardDate}</h4>
        </div>
        <div className='card-section'>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
        </div>
        <div className='card-section'>
          <p>{formattedTemps}</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>{_.capitalize(weather.weather[0].description)}</p>
          {weather.sunrise && <p>Sunrise: {sunrise} / Sunset: {sunset}</p>}
        </div>
      </div>
    </div>
  )
}

export default SingleTile
