import React, {useState, useEffect, useCallback} from 'react'
import SearchField from '../../components/search-field'
import WeatherBlock from '../../components/weather-block'
import './style.css'
import {Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {query, setQueryLoading} from '../../actions/location'
import {getWeatherInformation} from '../../actions/weather'
import {debounce} from 'lodash'
import LoadingSpinner from '../../components/loading-spinner'

const WeatherForecastCard = () => {
  const [keyword, setKeyword] = useState('')
  const [loading, setLoading] = useState(false)
  const {queryResults, loading: locationLoading} = useSelector(state => state.location)
  const weatherInfo = useSelector(state => state.weather.info)
  const dispatch = useDispatch()
  
  const onDebouncedQuery = useCallback(
    debounce((keyword) => {
      if (keyword) {
        dispatch(query(keyword))
      }
    }, 400)
  , [])

  const _onType = (e) => {
    setKeyword(e.target.value)
    dispatch(setQueryLoading())
  }

  const _onSelect = (woeid) => {
    setLoading(true)
    dispatch(getWeatherInformation(woeid))
  }

  useEffect(() => {
    onDebouncedQuery(keyword)
  }, [keyword, onDebouncedQuery])

  useEffect(() => {
    setLoading(false)
  }, [weatherInfo])

  return (
    <div className='weather-forecast__wrapper'>
      <h2 className='weather-forecast__title'>WEATHER FORECAST</h2>
      <Row>
        <Col md={{span: 4, offset: 1}}>
          <SearchField
            className='weather-forecast__input'
            onChange={_onType}
            onSelect={_onSelect}
            value={keyword}
            queryResults={queryResults}
            loading={locationLoading}
          />
        </Col>
      </Row>
      <Row>
        <Col md={{span: 10, offset: 1}}>
          <WeatherBlock info={weatherInfo}/>
        </Col>
      </Row>
      {loading &&
        <LoadingSpinner
          loaderClassName='loading-spinner__loader--weather-block'
          wrapperClassName='loading-spinner__wrapper--weather-block'
        />
      }
    </div>
  )
}

export default WeatherForecastCard