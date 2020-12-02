import keyMirror from "keymirror";

export const ENTER_KEY_CODE = 13;

export const ACTION_TYPES = keyMirror({
  QUERY_LOCATION: null,
});

const BASE_URL = 'https://www.metaweather.com'
const BASE_API_URL = `${BASE_URL}/api/location`


export const API_URL = {
  SEARCH: `${BASE_API_URL}/search/`,
  LOCATION_WEATHER_FORECAST: `${BASE_API_URL}/{:woeid}/`
};

export const ICON_URL = `${BASE_URL}/static/img/weather/{:weather_state_abbr}.svg`
