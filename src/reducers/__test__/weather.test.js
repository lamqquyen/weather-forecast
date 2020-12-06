import weather from '../weather'
import {ACTION_TYPES} from '../../core/constants'
import {weatherPayload} from '../../../__mock__/payload'

describe('location reducer', () => {
  const initialState = {
    info: {}
  }

  it('should return the initial state', () => {
    expect(weather(undefined, {})).toEqual(initialState)
  })

  it('should handle GET_WEATHER_INFORMATION', () => {
    expect(
      weather(initialState, {
        type: ACTION_TYPES.GET_WEATHER_INFORMATION,
        payload: {}
      })
    ).toEqual({...initialState, info: {}})

    expect(
      weather(initialState,
        {
          type: ACTION_TYPES.GET_WEATHER_INFORMATION,
          payload: weatherPayload
        }
      )
    ).toEqual({
      ...initialState,
      info: weatherPayload
    })
  })
})