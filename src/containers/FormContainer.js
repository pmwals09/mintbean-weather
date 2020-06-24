import React from 'react'

import Form from '../components/Form'

const FormContainer = ({field, label}) => {

  const fetchLocation = zipCode => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=AIzaSyAw4i_9cDoT7kPLzs6FbzzWb1kZ52R_BRs`)
    .then(response => {
      if(response.ok) {
        return response.json()
      } else {
        let error = new Error(`${response.status} (${response.statusText})`)
        throw error
      }
    })
    .then(weatherData => {
      console.log(weatherData)
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
