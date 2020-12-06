import React from 'react'
import classNames from 'classnames';
import PropTypes from 'prop-types'
import './style.css'
import {noop} from 'lodash'
import {ICON_URL, DAYS_OF_WEEK} from '../../core/constants'

const WeatherCard = (props) => {
  const {weather, selected, onSelect, index} = props

  const _getDayOfWeek = (applicableDate) => {
    const date = new Date(applicableDate)
    return DAYS_OF_WEEK.SHORT[date.getDay()]
  }

  const _getDate = (applicableDate) => {
    const date = new Date(applicableDate)
    const month = date.getMonth() + 1
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()

    return `${month} - ${day}`
  }

  return (
    <div onClick={() => {onSelect(index)}} 
      className={classNames(['weather-card__wrapper', {'weather-card__wrapper--selected': selected}])}>
      <div className='weather-card__text--day'>
        {_getDayOfWeek(weather.applicable_date)}
      </div>
      <div className='weather-card__text--date'>
        {_getDate(weather.applicable_date)}
      </div>
      <img className='weather-card__icon'
        src={ICON_URL.replace('{:weather_state_abbr}', weather.weather_state_abbr)}/>
      <div className='weather-card__temperature-wrapper'>
      <div className='weather-card__text--max-temperature'>{Math.round(weather.max_temp)}°</div>
      <div className='weather-card__text--min-temperature'>{Math.round(weather.min_temp)}°</div>
      </div>
    </div>
  )
}

WeatherCard.propTypes = {
  weather: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
  index: PropTypes.number
}

WeatherCard.defaultProps = {
  selected: false,
  onSelect: noop,
  index: 0
}

export default WeatherCard