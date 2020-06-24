import React from 'react'

import SingleTile from '../components/SingleTile'

const WeatherContainer = ({weather, selectedScope}) => {

  let weatherTiles = null
  if(selectedScope === 'current'){
    weatherTiles = <SingleTile weather={weather[selectedScope].weather} date={weather[selectedScope].dt}/>
  } else {
    weatherTiles = weather[selectedScope].map((unit, i) => {
      return (
        <SingleTile
          key={i}
          weather={unit.weather}
          date={unit.dt}
          duration={selectedScope === 'hourly' ? 'hourly' : 'daily'}
        />
      )
    })
  }

  return (
    <div className='grid-x'>
      {weatherTiles}
  </div>
  )
}

export default WeatherContainer
