import {ACTION_TYPES, API_URL, HEADERS} from '../core/constants'
import axios from 'axios'

export const getWeatherInformation = (woeid) => async (dispatch) => {
  const result = await axios.get(
    API_URL.LOCATION_WEATHER_FORECAST.replace('{:woeid}', woeid),
    {
      method: 'GET',
      headers: HEADERS
    }
  )
  
  return dispatch({type: ACTION_TYPES.GET_WEATHER_INFORMATION, payload: result.data})
}
