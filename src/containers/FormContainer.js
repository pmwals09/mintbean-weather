import React from 'react'

import Form from '../components/Form'

const FormContainer = ({field, label, fetchWeather}) => {

  const fetchLocation = location => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${process.env.REACT_APP_ZIP_API_KEY}`)
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        let error = new Error(`${response.status} (${response.statusText})`)
        throw error
      }
    })
    .then(locationData => {
      const location = locationData.results[0].geometry.location
      fetchWeather(location)
      // console.log(locationData)
    })
  }

  return (
    <Form
      field={field}
      label={label}
      fetchLocation={fetchLocation}
    />
  )
}

export default FormContainer
