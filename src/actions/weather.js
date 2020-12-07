import {ACTION_TYPES, API_URL, HEADERS} from '../core/constants'

export const getWeatherInformation = (woeid) => async (dispatch) => {
  return fetch(
    API_URL.LOCATION_WEATHER_FORECAST.replace('{:woeid}', woeid),
    {
      method: 'GET',
      headers: HEADERS
    }
  )
  .then(response => response.json())
  .then(weatherInfo => {
    return dispatch({type: ACTION_TYPES.GET_WEATHER_INFORMATION, payload: weatherInfo})
  })
}
