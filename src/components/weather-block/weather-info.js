import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import {ICON_URL, DAYS_OF_WEEK, MONTHS} from '../../core/constants'

const WeatherInfo = (props) => {
  const {weather, location} = props
  const applicableDate = new Date(weather.applicable_date)

  const _getDate = () => {
    const dayOfWeek = DAYS_OF_WEEK.LONG[applicableDate.getDay()]
    const day = applicableDate.getDate() < 10 ? `0${applicableDate.getDate()}` : applicableDate.getDate()
    const month = MONTHS[applicableDate.getMonth()]
    const year = applicableDate.getFullYear()
    
    return `${dayOfWeek}, ${day} ${month} ${year}`
  }

  return (
    <div className='weather-info__wrapper'>
      <div className='weather-info__wrapper--left'>
        <div className='weather-info__text--location'>
          {location.title} {location.type}
        </div>
        <div className='weather-info__text--day'>
          {_getDate()}
        </div>
        <div className='weather-info__text--state-name'>
          {weather.weather_state_name}
        </div>
      </div>
      <div className='weather-info__wrapper--right'>
        <div className='weather-info__info-wrapper'>
          <div>Humidity: {weather.humidity}%</div>
          <div>Wind: {Math.round(weather.wind_speed * 100) / 100} mph</div>
          <div>Air Pressure: {Math.round(weather.air_pressure * 100) / 100} mbar</div>
          <div>Visibility: {Math.round(weather.visibility * 100) / 100} miles</div>
        </div>
        <div style={{width: '35%'}}>
          <img className='weather-info__icon'
            src={ICON_URL.replace('{:weather_state_abbr}', weather.weather_state_abbr)}/>
          <div className='weather-info__text--temperature'>
            {Math.round(weather.max_temp)}°C
          </div>
        </div>
      </div>
    </div>
    
  )
}

WeatherInfo.propTypes = {
  weather: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default WeatherInfo