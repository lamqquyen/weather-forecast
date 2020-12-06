import {ACTION_TYPES} from '../core/constants'

const initialState = {
  queryResults: [],
  loading: false
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ACTION_TYPES.QUERY_LOCATION:
      state = {
        ...state,
        queryResults: payload,
        loading: false
      }
      break
    case ACTION_TYPES.SET_QUERY_LOADING:
      state = {
        ...state,
        loading: true
      }
      break
    default:
      break
  }

  return state
}
