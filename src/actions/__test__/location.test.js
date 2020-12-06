import fetchMock from 'fetch-mock'
import {mockStore} from '../../../__mock__/store'
import {ACTION_TYPES, API_URL} from "../../core/constants"
import {locationPayload} from '../../../__mock__/payload'
import {query, setQueryLoading} from '../location'

describe('location actions', () => {
  const store = mockStore({queryResults: [], loading: false})

  afterEach(() => {
    fetchMock.restore()
  })

  it('creates QUERY_LOCATION when fetching location queries has been done', () => {
    fetchMock.get(`${API_URL.SEARCH}?query=${encodeURIComponent('test')}`, {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      },
      body: locationPayload
    })

    const expectedActions = [
      { type: ACTION_TYPES.QUERY_LOCATION, payload: locationPayload}
    ]

    return store.dispatch(query('test')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates SET_QUERY_LOADING when set loading', () => {
    const expectedActions = {type: ACTION_TYPES.SET_QUERY_LOADING, payload: null}

    expect(setQueryLoading()).toEqual(expectedActions)
  })
})