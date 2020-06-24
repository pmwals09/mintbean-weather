import React from 'react';

import FormContainer from './containers/FormContainer'

function App() {
  const fetchWeather = location => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
  }

  return (
    <div className="grid-container">
      <h1 className='text-center'>Check your local weather</h1>
      <div className='grid-y'>
        <div className="cell">
          <FormContainer
            field={'location'}
            label={'Location'}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
