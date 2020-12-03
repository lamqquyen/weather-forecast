import keyMirror from 'keymirror';

export const ENTER_KEY_CODE = 13;

export const ACTION_TYPES = keyMirror({
  QUERY_LOCATION: null,
  GET_WEATHER_INFORMATION: null
});

const BASE_URL = 'https://www.metaweather.com'
const BASE_API_URL = `${BASE_URL}/api/location`


export const API_URL = {
  SEARCH: `${BASE_API_URL}/search/`,
  LOCATION_WEATHER_FORECAST: `${BASE_API_URL}/{:woeid}/`
};

export const ICON_URL = `${BASE_URL}/static/img/weather/{:weather_state_abbr}.svg`

export const DAYS_OF_WEEK = {
  SHORT: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
  LONG: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December']