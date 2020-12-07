import keyMirror from 'keymirror'

export const ENTER_KEY_CODE = 13;

export const ACTION_TYPES = keyMirror({
  QUERY_LOCATION: null,
  GET_WEATHER_INFORMATION: null,
  SET_QUERY_LOADING: null,
  SET_SELECT_LOCATION_LOADING: null,
});


export const HEADERS = {
  'content-type': 'application/json',
  'accept': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*'
}


export const API_URL = {
  SEARCH: `/search/`,
  LOCATION_WEATHER_FORECAST: `/{:woeid}/`
};


const BASE_URL = 'https://www.metaweather.com'
export const ICON_URL = `${BASE_URL}/static/img/weather/{:weather_state_abbr}.svg`

export const DAYS_OF_WEEK = {
  SHORT: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
  LONG: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']