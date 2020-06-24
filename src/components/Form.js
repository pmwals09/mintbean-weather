import React, { useState } from 'react'

const Form = ({field, label, fetchLocation}) => {
  const defaultState = {
    fieldVal: ''
  }
  const [formValues, setFormValues] = useState(defaultState)

  const handleChange = event => {
    setFormValues({
      ...formValues,
      fieldVal: event.currentTarget.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    fetchLocation(formValues.fieldVal)
  }

  return (
    <div className='grid-x align-center'>
      <div className='small-4'>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <label htmlFor={`${field}`} className='input-group-label'>
              {label}
            </label>
            <input
              type="text"
              id={`${field}`}
              name={`${field}`}
              className='input-group-field'
              value={formValues.fieldVal}
              onChange={handleChange}
            />
            <div className='input-group-button'>
              <input type="submit" value="Submit" className="button"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
