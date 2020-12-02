import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {InputGroup, FormControl} from 'react-bootstrap'
import {ENTER_KEY_CODE} from '../../core/constants'
import './style.css'
import {noop} from 'lodash'

const Input = (props) => {
  const {className, value, onChange, queryResults} = props
  const [locations, setLocations] = useState([])

  const _handleKeyDown = (e) => {
    const keyCode = e.keyCode
    
    if (keyCode === ENTER_KEY_CODE) {
    }
  }

  useEffect(() => {
    setLocations(queryResults)
  }, [queryResults])


  useEffect(() => {
    if (!value) {
      setLocations([])
    }
  }, [value])

  const locationSelection = locations.map((location) => {
    return <div key={location.woeid} className='input__suggestion-option'>
      {location.title} {location.location_type}
    </div>
  })

  return (
    <InputGroup className={className}>
      <InputGroup.Prepend>
        <InputGroup.Text id='basic-addon1'>
          <i className="fa fa-search" />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        value={value}
        onChange={onChange}
        placeholder='Search'
        onKeyDown={_handleKeyDown}
      />
      {locations.length > 0 &&
        <div className='input__suggestion-wrapper'>
          {locationSelection}
        </div>}
    </InputGroup>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  queryResults: PropTypes.array
}

Input.defaultProps = {
  className: '',
  value: '',
  onChange: noop,
  queryResults: []
}

export default Input