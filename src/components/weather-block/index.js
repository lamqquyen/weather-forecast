import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import './style.css'
import {noop} from 'lodash'

const WeatherBlock = (props) => {

  return (
    <div className='weather-block__wrapper'>

    </div>
  )
}

WeatherBlock.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  queryResults: PropTypes.array
}

WeatherBlock.defaultProps = {
  className: '',
  value: '',
  onChange: noop,
  queryResults: []
}

export default WeatherBlock