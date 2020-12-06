import fetchMock from 'fetch-mock'
import {mockStore} from '../../../__mock__/store'
import {ACTION_TYPES, API_URL} from "../../core/constants"
import {weatherPayload} from '../../../__mock__/payload'
import {getWeatherInformation} from '../weather'

describe('weather actions', () => {
  const store = mockStore({queryResults: [], loading: false})

  afterEach(() => {
    fetchMock.restore()
  })

  it('creates GET_WEATHER_INFORMATION when fetching whether information has been done', () => {
    fetchMock.get(API_URL.LOCATION_WEATHER_FORECAST.replace('{:woeid}', 1234), {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: weatherPayload
    })

    const expectedActions = [
      { type: ACTION_TYPES.GET_WEATHER_INFORMATION, payload: weatherPayload}
    ]

    return store.dispatch(getWeatherInformation(1234)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})