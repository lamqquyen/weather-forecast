import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import './style.css'
import {get} from 'lodash'
import WeatherCard from './weather-card'
import WeatherInfo from './weather-info'


const WeatherBlock = (props) => {
  const [selectedCard, setSelectedCard] = useState(0)
  const {info} = props
  const consolidatedWeather = get(info, 'consolidated_weather', [])
  const {title, location_type} = info

  useEffect(() => {
    setSelectedCard(0)
  }, [consolidatedWeather])

  const _onSelect = (index) => {
    setSelectedCard(index)
  }
  let weatherCards = consolidatedWeather.map((weather, index) => {
    return <WeatherCard
      selected={selectedCard === index}
      index={index}
      key={weather.id}
      weather={weather}
      onSelect={_onSelect}
    />
  })

  return (
    <div className='weather-block__wrapper'>
      {consolidatedWeather.length > 0 &&
        <>
          <WeatherInfo
            weather={consolidatedWeather[selectedCard]}
            location={{title, type: location_type}}
          />
          <div className='weather-block__cards-wrapper'>
            {weatherCards}
          </div>
        </>
      }
      {consolidatedWeather.length === 0 &&
        <div>Search a location to get weather informations</div>
      }
    </div>
  )
}

WeatherBlock.propTypes = {
  info: PropTypes.object.isRequired
}

WeatherBlock.defaultProps = {
}

export default WeatherBlock