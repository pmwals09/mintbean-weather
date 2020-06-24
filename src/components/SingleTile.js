import React from 'react'

const SingleTile = ({weather, duration}) => {
  const cardDate = new Date(weather.dt * 1000).toString()
  const formattedCardDate = duration === 'daily' ? cardDate.slice(0,10) : cardDate.slice(0,10).concat(cardDate.slice(15,21))

  const temps = weather.temp.day ? {a: weather.temp.max, b: weather.temp.min} : {a: weather.temp, b: weather.feels_like}
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
          <p>Temp: {temps.a} / Feels like: {temps.b}</p>
          <p>{weather.weather[0].main}: {weather.weather[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleTile
