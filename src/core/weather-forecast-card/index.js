import React, {useState, useEffect, useCallback} from 'react'
import SearchField from '../../components/search-field'
import WeatherBlock from '../../components/weather-block'
import './style.css'
import {Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {query} from '../../actions/location'
import {getWeatherInformation} from '../../actions/weather'
import {debounce} from 'lodash'

const WeatherForecastCard = () => {
  const [keyword, setKeyword] = useState('')
  const queryResults = useSelector(state => state.location.queryResults)
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
  }

  const _onSelect = (woeid) => {
    dispatch(getWeatherInformation(woeid))
  }

  useEffect(() => {
    onDebouncedQuery(keyword)
  }, [keyword, onDebouncedQuery])

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
          />
        </Col>
      </Row>
      <Row>
        <Col md={{span: 10, offset: 1}}>
          <WeatherBlock></WeatherBlock>
        </Col>
      </Row>
    </div>
  )
}

export default WeatherForecastCard