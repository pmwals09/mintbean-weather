import React, { useState } from 'react';

import FormContainer from './containers/FormContainer'
import ScopeButton from './components/ui/ScopeButton'
import WeatherContainer from './containers/WeatherContainer'

function App() {
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(true)
  const [selectedScope, setSelectedScope] = useState('current')

  const availableScopes = ['current', 'hourly', 'daily']

  const selectionButtons = availableScopes.map((scope, index) => {
    let selectedStatus = scope === selectedScope ? true : false
    return (
      <ScopeButton
        key={scope+index}
        scope={scope}
        selectedStatus={selectedStatus}
        setSelectedScope={setSelectedScope}
      />
    )
  })

  const fetchWeather = location => {
    setLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        let error = new Error(`${response.status} (${response.statusText})`)
        throw error
      }
    })
    .then(weatherData => {
      setWeather(weatherData)
      setLoading(false)
    })
  }

  return (
    <div className="grid-container">
      <h1 className='text-center'>Check your local weather</h1>
      <div className='grid-y'>
        <div className="cell">
          <FormContainer
            field={'location'}
            label={'Location'}
            fetchWeather={fetchWeather}
          />
        </div>
        {!loading &&
          <>
            <div className="cell">
              <div className='button-group align-center'>
                {selectionButtons}
              </div>
            </div>
            <div className="cell">
              <WeatherContainer
                weather={weather}
                selectedScope={selectedScope}
              />
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default App;
