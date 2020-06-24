import React from 'react'

import SingleTile from '../components/SingleTile'

const WeatherContainer = ({weather, selectedScope}) => {

  let weatherTiles = null
  if(selectedScope === 'current'){
    weatherTiles = <SingleTile weather={weather[selectedScope]} duration='hourly'/>
  } else {
    weatherTiles = weather[selectedScope].map((unit, i) => {
      return (
        <SingleTile
          key={i}
          weather={unit}
          duration={selectedScope === 'hourly' ? 'hourly' : 'daily'}
        />
      )
    })
  }

  return (
    <div className='grid-x grid-margin-x align-center'>
      {weatherTiles}
  </div>
  )
}

export default WeatherContainer
