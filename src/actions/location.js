import {ACTION_TYPES, API_URL, HEADERS} from '../core/constants'

export const query = (keyword) => async (dispatch) => {
  return fetch(
    `${API_URL.SEARCH}?query=${encodeURIComponent(keyword)}`,
    {
      method: 'GET',
      headers: HEADERS
    }
  )
  .then(response => response.json())
  .then(queryResults => {
   return dispatch({type: ACTION_TYPES.QUERY_LOCATION, payload: queryResults})
  })
}

export const setQueryLoading = () => {
  return {type: ACTION_TYPES.SET_QUERY_LOADING, payload: null}
}