import {ACTION_TYPES, API_URL} from "../core/constants"

export const getWeatherInformation = (woeid) => async (dispatch) => {
  return fetch(
    API_URL.LOCATION_WEATHER_FORECAST.replace('{:woeid}', woeid),
    {
      method: 'GET',
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      }
    }
  )
  .then(response => response.json())
  .then(weatherInfo => {
    return dispatch({type: ACTION_TYPES.GET_WEATHER_INFORMATION, payload: weatherInfo})
  })
}
