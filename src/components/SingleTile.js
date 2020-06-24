import React from 'react'

const SingleTile = ({weather, date, duration}) => {
  const cardDate = new Date(date * 1000).toString()
  const formattedCardDate = duration === 'daily' ? cardDate.slice(0,10) : cardDate.slice(0,10).concat(cardDate.slice(15,21))
  return (
    <div className='cell small-2 text-center'>
      <div className='card'>
        <div className='card-section'>
          <h4>{formattedCardDate}</h4>
        </div>
        <div className='card-section'>
          <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} />
        </div>
        <div className='card-section'>
          <p>{weather[0].main}: {weather[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleTile
