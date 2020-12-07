import {ACTION_TYPES, API_URL, HEADERS} from '../core/constants'
import axios from 'axios'

export const query = (keyword) => async (dispatch) => {
  const result = await axios.get(
    `${API_URL.SEARCH}?query=${encodeURIComponent(keyword)}`,
    {
      method: 'GET',
      headers: HEADERS
    }
  )

  return dispatch({type: ACTION_TYPES.QUERY_LOCATION, payload: result.data})
}

export const setQueryLoading = () => {
  return {type: ACTION_TYPES.SET_QUERY_LOADING, payload: null}
}