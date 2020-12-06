import React from 'react'
import WeatherForecastCard from '../core/weather-forecast-card'
import './style.css'

function Main() {
  return (
    <div className='main__wrapper'>
      <WeatherForecastCard />
    </div>
  );
}

export default Main;
