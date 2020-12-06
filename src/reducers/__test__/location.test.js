import location from '../location'
import {ACTION_TYPES} from '../../core/constants'
import {locationPayload} from '../../../__mock__/payload'

describe('location reducer', () => {
  const initialState = {
    queryResults: [],
    loading: false
  }

  it('should return the initial state', () => {
    expect(location(undefined, {})).toEqual(initialState)
  })

  it('should handle QUERY_LOCATION', () => {
    expect(
      location(initialState, {
        type: ACTION_TYPES.QUERY_LOCATION,
        payload: []
      })
    ).toEqual({...initialState, queryResults: [], loading: false})

    expect(
      location(initialState,
        {
          type: ACTION_TYPES.QUERY_LOCATION,
          payload: locationPayload
        }
      )
    ).toEqual({
      ...initialState,
      queryResults: locationPayload,
      loading: false
    })
  })


  it('should handle SET_QUERY_LOADING', () => {
    expect(
      location(initialState, {
        type: ACTION_TYPES.SET_QUERY_LOADING,
        payload: []
      })
    ).toEqual(
      {
        ...initialState,
        loading: true
      }
    )
  })
})