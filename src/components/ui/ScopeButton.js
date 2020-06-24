import React from 'react'
import _ from 'lodash'

const ScopeButton = ({scope, selectedStatus, setSelectedScope}) => {
  const classes = selectedStatus ? 'success button' : 'button'
  return (
    <button
      type="button"
      className={classes}
      onClick={() => setSelectedScope(scope)}
    >
      {_.capitalize(scope)}
    </button>
  )
}

export default ScopeButton
