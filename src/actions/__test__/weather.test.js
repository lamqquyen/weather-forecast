import axios from 'axios';
import {mockStore} from '../../../__mock__/store'
import {ACTION_TYPES, API_URL} from "../../core/constants"
import {weatherPayload} from '../../../__mock__/payload'
import {getWeatherInformation} from '../weather'

jest.mock('axios')


describe('weather actions', () => {
  const store = mockStore({info: {}})

  it('creates GET_WEATHER_INFORMATION when fetching whether information has been done', () => {
    axios.get.mockResolvedValue({data: weatherPayload})

    const expectedActions = [
      { type: ACTION_TYPES.GET_WEATHER_INFORMATION, payload: weatherPayload}
    ]

    return store.dispatch(getWeatherInformation(1234)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})