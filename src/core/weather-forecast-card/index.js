import React, {useState, useEffect, useCallback} from 'react'
import Input from '../../components/input-field'
import './style.css'
import {Row, Col} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {query} from '../../actions/location-query'
import {debounce} from 'lodash'

const WeatherForecastCard = () => {
  const [keyword, setKeyword] = useState('')
  const queryResults = useSelector(state => state.locationQuery.queryResults)
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

  useEffect(() => {
    onDebouncedQuery(keyword)
  }, [keyword])

  return (
    <div className='weather-forecast__wrapper'>
      <Row>
        <Col md={{span: 8, offset: 2}}>
          <Input
            className='weather-forecast__input'
            onChange={_onType}
            value={keyword}
            queryResults={queryResults}
          />
        </Col>
      </Row>
      {/* <Row>
        <Col md={{span: 8, offset: 2}}>
          <Input className='weather-forecast__input'/>
        </Col>
      </Row> */}
    </div>
  )
}

export default WeatherForecastCard